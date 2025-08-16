import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizData } from '../data/quizData'
import Question from './Question'
import ProgressBar from './ProgressBar'
import Results from './Results'
import BirthdayMessage from './BirthdayMessage'
import ConfettiEffect from './ConfettiEffect'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

export default function Quiz() {
    const [quizState, setQuizState] = useState({
        currentQuestion: 0,
        score: 0,
        showResults: false,
        showBirthday: false,
        selectedAnswers: [],
        timeLeft: quizData.timePerQuestion,
        quizStarted: false,
        answeredQuestions: new Set()
    })

    const startQuiz = () => {
        setQuizState(prev => ({
            ...prev,
            quizStarted: true,
            timeLeft: quizData.timePerQuestion
        }))
    }

    const handleAnswer = (answerId, questionId) => {
        if (quizState.answeredQuestions.has(questionId)) return

        const isCorrect = answerId === quizData.questions[questionId].correctAnswer
        const newScore = isCorrect ? quizState.score + 1 : quizState.score

        setQuizState(prev => ({
            ...prev,
            score: newScore,
            selectedAnswers: [...prev.selectedAnswers, {
                questionId,
                answerId,
                isCorrect,
                timestamp: new Date().toISOString()
            }],
            answeredQuestions: new Set(prev.answeredQuestions).add(questionId)
        }))

        if (quizState.currentQuestion < quizData.questions.length - 1) {
            setTimeout(() => {
                setQuizState(prev => ({
                    ...prev,
                    currentQuestion: prev.currentQuestion + 1,
                    timeLeft: quizData.timePerQuestion
                }))
            }, 1000)
        } else {
            setTimeout(() => {
                setQuizState(prev => ({ ...prev, showResults: true }))
            }, 1500)
        }
    }

    useEffect(() => {
        if (!quizState.quizStarted || quizState.showResults) return

        const timer = setInterval(() => {
            setQuizState(prev => {
                if (prev.timeLeft > 0) {
                    return { ...prev, timeLeft: prev.timeLeft - 1 }
                } else {
                    handleAnswer(null, prev.currentQuestion)
                    return { ...prev, timeLeft: quizData.timePerQuestion }
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [quizState.quizStarted, quizState.showResults])

    const resetQuiz = () => {
        setQuizState({
            currentQuestion: 0,
            score: 0,
            showResults: false,
            showBirthday: false,
            selectedAnswers: [],
            timeLeft: quizData.timePerQuestion,
            quizStarted: true,
            answeredQuestions: new Set()
        })
    }

    const showBirthdayMessage = () => {
        setQuizState(prev => ({ ...prev, showBirthday: true, showResults: false }))
    }

    if (!quizState.quizStarted) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-4"
            >
                <motion.div
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="max-w-2xl w-full h-auto bg-white rounded-lg shadow-xl overflow-hidden"
                >
                    <motion.div
                        className="relative h-auto overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.img
                            src={quizData.image}
                            alt="Apôtre William's Houissou"
                            className="w-full h-auto object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.div
                            className="absolute inset-0  bg-black bg-opacity-30 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.h1
                                className="text-4xl font-bold text-white text-center"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                {quizData.title}
                            </motion.h1>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="p-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p
                            className="text-gray-600 mb-6 text-center text-xl"
                            variants={containerVariants}
                        >
                            {quizData.description}
                        </motion.p>

                        <motion.button
                            onClick={startQuiz}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <span className="relative z-10">Commencer le quiz</span>
                            <motion.span
                                className="absolute inset-0 bg-blue-700 opacity-0"
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        )
    }

    return (
        <AnimatePresence mode='wait'>
            {quizState.showBirthday ? (
                <BirthdayMessage
                    key="birthday"
                    data={quizData.birthdayMessage}
                    image={quizData.birthdayImage}
                    socialMedia={quizData.socialMedia}
                />
            ) : quizState.showResults ? (
                <Results
                    key="results"
                    score={quizState.score}
                    totalQuestions={quizData.questions.length}
                    selectedAnswers={quizState.selectedAnswers}
                    questions={quizData.questions}
                    onRetry={resetQuiz}
                    onContinue={showBirthdayMessage}
                    timePerQuestion={quizData.timePerQuestion}
                />
            ) : (
                <motion.div
                    key="quiz"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-4"
                >
                    <ConfettiEffect active={quizState.score === quizData.questions.length} />

                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring" }}
                        className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
                    >
                        <ProgressBar
                            current={quizState.currentQuestion + 1}
                            total={quizData.questions.length}
                            timeLeft={quizState.timeLeft}
                            timePerQuestion={quizData.timePerQuestion}
                        />

                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={quizState.currentQuestion}
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{ type: "spring", damping: 10 }}
                            >
                                <Question
                                    question={quizData.questions[quizState.currentQuestion]}
                                    onAnswer={handleAnswer}
                                    questionNumber={quizState.currentQuestion + 1}
                                    timeLeft={quizState.timeLeft}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}