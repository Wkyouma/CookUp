import { ClockIcon, UserIcon, FireIcon } from '@heroicons/react/24/solid'

const ReceitaCard = ({ title, tags, text }) => {
    return (
        <div className="bg-white dark:bg-noturno-card rounded-xl overflow-hidden
                      transform hover:scale-102 transition-all duration-300
                      shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
                      border border-gray-100 dark:border-gray-800">
            
            {/* Cabeçalho do Card */}
            <div className="h-32 bg-gradient-to-r from-laranja-claro to-laranja-escuro
                          dark:from-laranja-escuro dark:to-laranja-claro p-6
                          flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white text-center
                             drop-shadow-lg">
                    {title}
                </h2>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
                {/* Informações da Receita */}
                <div className="flex justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>30 min</span>
                    </div>
                    <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span>4 porções</span>
                    </div>
                    <div className="flex items-center">
                        <FireIcon className="h-4 w-4 mr-1" />
                        <span>Fácil</span>
                    </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {text && text[0]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.split(',').map((tag, index) => (
                        <span key={index} 
                              className="inline-block px-3 py-1 text-sm
                                       bg-orange-100 dark:bg-orange-900
                                       text-orange-800 dark:text-orange-100
                                       rounded-full font-medium
                                       transform hover:scale-105 transition-all duration-200
                                       cursor-pointer">
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            </div>

            {/* Rodapé do Card */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-noturno-bg
                          border-t border-gray-100 dark:border-gray-800">
                <button className="w-full py-2 px-4 
                                 bg-gradient-to-r from-laranja-claro to-laranja-escuro
                                 dark:from-laranja-escuro dark:to-laranja-claro
                                 text-white font-medium rounded-lg
                                 transform hover:scale-105 transition-all duration-200
                                 focus:outline-none focus:ring-2 focus:ring-laranja-escuro
                                 shadow-lg">
                    Ver Receita
                </button>
            </div>
        </div>
    )
}

export default ReceitaCard 