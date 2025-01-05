import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-noturno-bg flex items-center justify-center px-4">
            <div className="text-center">
                <motion.h1 
                    className="text-9xl font-bold text-laranja-escuro dark:text-laranja-claro mb-4"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>

                <motion.h2 
                    className="text-3xl font-semibold text-gray-800 dark:text-white mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Ops! Página não encontrada
                </motion.h2>

                <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Parece que a receita que você está procurando não existe ou foi removida.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link 
                        to="/"
                        className="inline-block px-6 py-3 rounded-lg
                                 bg-gradient-to-r from-laranja-claro to-laranja-escuro
                                 text-white font-medium
                                 transform hover:scale-105 transition-all duration-300
                                 shadow-lg hover:shadow-xl"
                    >
                        Voltar para o Início
                    </Link>
                </motion.div>
                <motion.div
                    className="mt-12"
                    animate={{ 
                        rotate: [0, -10, 10, -10, 10, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-24 h-24 mx-auto text-laranja-escuro dark:text-laranja-claro"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M7 4h10M4 8h16c1 0 2 .5 2 2v3c0 6-4 7-10 7s-10-1-10-7v-3c0-1.5 1-2 2-2z" />
                        <path d="M4 8c-1.5 0-2-1-2-2c0-2 3-3 3-3" />
                        <path d="M20 8c1.5 0 2-1 2-2c0-2-3-3-3-3" />
                        <path d="M8 4c0-1 1-2 4-2s4 1 4 2" />
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}

export default NotFound