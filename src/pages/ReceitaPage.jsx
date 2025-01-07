import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import data from "../../artigos.json"
import NotFound from './NotFound'

const ReceitaPage = () => {
    const { id } = useParams()
    const [receita, setReceita] = useState(null)

    useEffect(() => {
        const receitaEncontrada = data.find(item => item.id === id)
        setReceita(receitaEncontrada)
    }, [id])

    if (!receita) return <NotFound />

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-noturno-bg">
            <main className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-noturno-card rounded-xl overflow-hidden shadow-lg"
                >
                    {/* Imagem da Receita */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative h-96"
                    >
                        <img
                            src={`/galeria/${id}/foto.jpg`}
                            alt={receita.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = '/galeria/error.jpg'
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>


                    <div className="p-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center mb-6 text-laranja-escuro dark:text-laranja-claro
                                         hover:text-laranja-claro dark:hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Voltar
                            </Link>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
                        >
                            {receita.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {receita.tags.split(',').map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900
                                             text-orange-800 dark:text-orange-100 rounded-full"
                                >
                                    {tag.trim()}
                                </span>
                            ))}
                        </motion.div>

                        {/* Texto da Receita */}
                        <div className="space-y-6">
                            {receita.text.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}

export default ReceitaPage
