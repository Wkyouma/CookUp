import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const BarraPesquisa = ({ value, onChange, placeholder, Icon  }) => {
    return (
        <div className="relative max-w-xl mx-auto mb-8">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-lg 
                         bg-white dark:bg-noturno-card 
                         border-2 border-laranja-claro dark:border-laranja-escuro
                         text-gray-800 dark:text-white
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-laranja-escuro
                         transition-all duration-300 shadow-lg"
            />
            <div className="absolute right-3 top-3">
                <Icon className="h-6 w-6 text-laranja-escuro dark:text-laranja-claro" />
            </div>
        </div>
    )
}

export default BarraPesquisa
