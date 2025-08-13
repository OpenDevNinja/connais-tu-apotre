import { motion } from 'framer-motion'

export default function ProgressBar({ current, total, timeLeft, timePerQuestion }) {
    const progress = (current / total) * 100
    const timeProgress = (timeLeft / timePerQuestion) * 100

    return (
        <div className="bg-gray-50 p-4 border-b">
            <motion.div
                className="flex justify-between items-center mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">
                        Question {current}/{total}
                    </span>
                </div>
                <motion.span
                    className={`text-sm font-bold px-2 py-1 rounded ${timeLeft < 10 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                        }`}
                    key={timeLeft}
                    initial={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring" }}
                >
                    {timeLeft}s
                </motion.span>
            </motion.div>

            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mb-1">
                <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, type: "spring" }}
                />
            </div>

            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <motion.div
                    className={`h-1 rounded-full ${timeLeft < 10 ? 'bg-red-500' : 'bg-green-400'
                        }`}
                    initial={{ width: '100%' }}
                    animate={{ width: `${timeProgress}%` }}
                    transition={{ duration: 1, ease: "linear" }}
                />
            </div>
        </div>
    )
}