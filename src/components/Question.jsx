import { motion } from 'framer-motion'
import { useState } from 'react'

const optionVariants = {
    hover: {
        scale: 1.02,
        boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.2)"
    },
    tap: { scale: 0.98 },
    selected: {
        scale: 1.02,
        backgroundColor: "#EFF6FF",
        borderColor: "#3B82F6",
        boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.4), 0 2px 4px -1px rgba(59, 130, 246, 0.3)",
        transition: { type: "spring", stiffness: 500 }
    },
    correct: {
        backgroundColor: "#ECFDF5",
        borderColor: "#10B981",
        color: "#065F46",
        boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.3), 0 2px 4px -1px rgba(16, 185, 129, 0.2)"
    },
    incorrect: {
        backgroundColor: "#FEF2F2",
        borderColor: "#EF4444",
        color: "#B91C1C",
        boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.3), 0 2px 4px -1px rgba(239, 68, 68, 0.2)"
    }
}

export default function Question({ question, onAnswer, questionNumber, timeLeft }) {
    const [selectedOption, setSelectedOption] = useState(null)
    const [hasAnswered, setHasAnswered] = useState(false)

    const handleSelect = (optionId) => {
        if (hasAnswered) return

        setSelectedOption(optionId)
        setHasAnswered(true)

        setTimeout(() => {
            onAnswer(optionId, question.id - 1)
            setSelectedOption(null)
            setHasAnswered(false)
        }, 1500)
    }

    const getOptionState = (index) => {
        if (!hasAnswered) return ""
        if (index === question.correctAnswer) return "correct"
        if (index === selectedOption && index !== question.correctAnswer) return "incorrect"
        return ""
    }

    return (
        <div className="p-6">
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-600">
                        Question {questionNumber}
                    </span>
                    {/* <motion.span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${timeLeft < 10 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                            }`}
                        key={timeLeft}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                    >
                        {timeLeft}s
                    </motion.span> */}
                </div>
                <motion.h2
                    className="text-xl font-bold text-gray-800 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {question.question}
                </motion.h2>
            </motion.div>

            <motion.div
                className="space-y-4"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                initial="hidden"
                animate="show"
            >
                {question.options.map((option, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all font-medium ${getOptionState(index) === "correct"
                                ? "border-green-500 bg-green-50 text-green-800"
                                : getOptionState(index) === "incorrect"
                                    ? "border-red-500 bg-red-50 text-red-800"
                                    : "border-gray-300 bg-white text-gray-800 hover:border-blue-400"
                            }`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                        }}
                        whileHover={hasAnswered ? {} : optionVariants.hover}
                        whileTap={hasAnswered ? {} : optionVariants.tap}
                        animate={
                            selectedOption === index
                                ? optionVariants.selected
                                : getOptionState(index)
                        }
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        disabled={hasAnswered}
                    >
                        <div className="flex items-center">
                            <span className="font-semibold mr-3 text-lg">{String.fromCharCode(65 + index)}.</span>
                            <span className="text-base">{option}</span>
                            {getOptionState(index) === "correct" && (
                                <svg className="ml-auto h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                            {getOptionState(index) === "incorrect" && (
                                <svg className="ml-auto h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    )
}