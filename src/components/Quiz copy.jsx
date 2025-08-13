import { useState, useEffect } from 'react'
import { quizData } from '../data/data'
import Question from './Question'
import ProgressBar from './ProgressBar'
import Results from './Results'
import BirthdayMessage from './BirthdayMessage'

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResults, setShowResults] = useState(false)
    const [showBirthday, setShowBirthday] = useState(false)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [timeLeft, setTimeLeft] = useState(30)
    const [quizStarted, setQuizStarted] = useState(false)

    const startQuiz = () => {
        setQuizStarted(true)
    }

    const handleAnswer = (answerId, questionId) => {
        const isCorrect = answerId === quizData.questions[questionId].correctAnswer
        setSelectedAnswers([...selectedAnswers, { questionId, answerId, isCorrect }])

        if (isCorrect) {
            setScore(score + 1)
        }

        if (currentQuestion < quizData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setTimeLeft(30)
        } else {
            setShowResults(true)
        }
    }

    useEffect(() => {
        if (!quizStarted || showResults) return

        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1)
            } else {
                handleAnswer(null, currentQuestion)
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [timeLeft, quizStarted, showResults])

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowResults(false)
        setSelectedAnswers([])
        setTimeLeft(30)
    }

    const showBirthdayMessage = () => {
        setShowBirthday(true)
        setShowResults(false)
    }

    if (!quizStarted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-4">
                <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in">
                    <div className="relative h-64">
                        <img
                            src={quizData.image}
                            alt="Apôtre William's Houissou"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{quizData.title}</h1>
                        <p className="text-gray-600 mb-6">{quizData.description}</p>
                        <button
                            onClick={startQuiz}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                        >
                            Commencer le quiz
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (showBirthday) {
        return <BirthdayMessage data={quizData.birthdayMessage} image={quizData.birthdayImage} />
    }

    if (showResults) {
        return (
            <Results
                score={score}
                totalQuestions={quizData.questions.length}
                selectedAnswers={selectedAnswers}
                questions={quizData.questions}
                onRetry={resetQuiz}
                onContinue={showBirthdayMessage}
            />
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <ProgressBar
                    current={currentQuestion + 1}
                    total={quizData.questions.length}
                    timeLeft={timeLeft}
                />

                <Question
                    question={quizData.questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    questionNumber={currentQuestion + 1}
                />
            </div>
        </div>
    )
}