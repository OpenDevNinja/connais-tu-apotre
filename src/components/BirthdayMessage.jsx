import { motion, AnimatePresence } from 'framer-motion'
import ConfettiEffect from './ConfettiEffect'

export default function BirthdayMessage({ data, image, socialMedia }) {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-4 overflow-hidden">
            <ConfettiEffect active={true} duration={10000} />

            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden z-10"
            >
                <motion.div
                    className="relative h-[500px] overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.img
                        src={image}
                        alt="Message d'anniversaire"
                        className="w-full h-full object-contain"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.h1
                            className="text-4xl font-bold text-white"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            {data.title}
                        </motion.h1>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="p-6 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.p
                        className="text-xl text-gray-600 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {data.message}
                    </motion.p>

                    <motion.blockquote
                        className="italic text-gray-700 mb-8 border-l-4 border-blue-500 pl-4 py-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        "{data.scripture}"
                    </motion.blockquote>

                    <motion.div
                        className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-center gap-4 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                    >
                        {socialMedia.facebook && (
                            <a
                                href={socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                                Facebook
                            </a>
                        )}

                        {socialMedia.whatsapp && (
                            <a
                                href={socialMedia.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">  
                                    <path d="M20.1 3.9l.7-.7.7 .7-2.5 2.5L18 15l-5-5-5 5-1.1-1.1L8 12l6.9-6.9-1.3-1.3zM17.9 6.7l-2.5-2.5.7-.7 2.5 2.5-4.3 4.3z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    </svg>
                                    WhatsApp 
                            </a>
                                    
                        )}

                        {socialMedia.youtube && (
                            <a
                                href={socialMedia.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                                YouTube
                            </a>
                        )}
                    </motion.div>

                        
                </motion.div>
            </motion.div>

            {/* Effets de fond animés */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </motion.div>
        </div>
    )
}