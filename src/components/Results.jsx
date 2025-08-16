import { motion, AnimatePresence } from 'framer-motion'
import ConfettiEffect from './ConfettiEffect'
import ChurchMap from './ChurchMap'
import { apostleBio } from '../data/apostleData'

const resultVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 }
    })
}

export default function Results({ score, totalQuestions, selectedAnswers, questions, onRetry, onContinue, timePerQuestion }) {
    const percentage = Math.round((score / totalQuestions) * 100)
    const averageTime = (
        selectedAnswers.reduce((acc, ans) => {
            return ans.timestamp ? acc + (new Date(ans.timestamp) - (new Date(selectedAnswers[0].timestamp))) : acc
        }, 0) / (selectedAnswers.length * 1000)
    ).toFixed(1)

    let message = ""
    let emoji = ""
    if (percentage >= 90) {
        message = "Exceptionnel ! Vous êtes un véritable expert de l'Apôtre !"
        emoji = "🎯"
    } else if (percentage >= 70) {
        message = "Excellent ! Vous connaissez très bien l'Apôtre."
        emoji = "🌟"
    } else if (percentage >= 50) {
        message = "Bien ! Vous avez de bonnes connaissances."
        emoji = "👍"
    } else if (percentage >= 30) {
        message = "Pas mal ! Vous connaissez quelques éléments."
        emoji = "💡"
    } else {
        message = "À améliorer ! Découvrez plus sur l'Apôtre."
        emoji = "📚"
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-4"
        >
            <ConfettiEffect active={percentage >= 70} />

            <motion.div
                variants={resultVariants}
                className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden"
            >
                <motion.div
                    className="p-6"
                    variants={resultVariants}
                >
                    <motion.h1
                        className="text-3xl font-bold text-center text-gray-800 mb-2"
                        variants={itemVariants}
                        custom={0}
                    >
                        Résultats du Quiz
                    </motion.h1>

                    <motion.div
                        className="flex flex-col items-center mb-8"
                        variants={itemVariants}
                        custom={1}
                    >
                        <div className="relative w-40 h-40 mb-6">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    className="text-gray-200"
                                    strokeWidth="8"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="40"
                                    cx="50"
                                    cy="50"
                                />
                                <circle
                                    className={`${percentage >= 90 ? 'text-green-500' :
                                            percentage >= 70 ? 'text-blue-500' :
                                                percentage >= 50 ? 'text-yellow-500' :
                                                    'text-red-500'
                                        }`}
                                    strokeWidth="8"
                                    strokeDasharray={`${percentage * 2.51} 251`}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="40"
                                    cx="50"
                                    cy="50"
                                />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
                                <span className={
                                    percentage >= 90 ? 'text-green-600' :
                                        percentage >= 70 ? 'text-blue-600' :
                                            percentage >= 50 ? 'text-yellow-600' :
                                                'text-red-600'
                                }>
                                    {percentage}%
                                </span>
                            </div>
                        </div>

                        <motion.p
                            className="text-xl font-semibold text-gray-700 mb-1"
                            variants={itemVariants}
                            custom={2}
                        >
                            {score} bonnes réponses sur {totalQuestions} {emoji}
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-600 mb-2"
                            variants={itemVariants}
                            custom={3}
                        >
                            {message}
                        </motion.p>

                        <motion.p
                            className="text-sm text-gray-500"
                            variants={itemVariants}
                            custom={4}
                        >
                            Temps moyen par question: {averageTime}s
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="space-y-4 mb-8"
                        variants={itemVariants}
                        custom={5}
                    >
                        <h3 className="text-xl font-bold text-gray-800">Détail des réponses</h3>
                        {questions.map((q, i) => {
                            const userAnswer = selectedAnswers.find(a => a.questionId === i)
                            const isCorrect = userAnswer?.isCorrect
                            const correctAnswer = q.options[q.correctAnswer]

                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    custom={6 + i}
                                    className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                                        }`}
                                >
                                    <p className="font-semibold text-gray-800">{q.question}</p>
                                    <p className={`mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                        {isCorrect
                                            ? `✅ Correct: ${correctAnswer}`
                                            : `❌ Votre réponse: ${userAnswer?.answerId !== null ? q.options[userAnswer.answerId] : 'Aucune'} | Correct: ${correctAnswer}`}
                                    </p>
                                    {q.explanation && (
                                        <p className="mt-2 text-sm text-gray-700">{q.explanation}</p>
                                    )}
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <ChurchMap />

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                        variants={itemVariants}
                        custom={questions.length + 7}
                    >
                        <motion.button
                            onClick={onRetry}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Recommencer
                        </motion.button>
                        <motion.button
                            onClick={onContinue}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Voir le message d'anniversaire
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}