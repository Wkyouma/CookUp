import ToggleTheme from "../ToggleTheme"
import { MoonIcon } from "@heroicons/react/24/solid"

const Cabecalho = () => {
  return (
    <div className="flex h-20 bg-gradient-to-r from-laranja-claro to-laranja-escuro dark:from-noturno-card dark:to-noturno-bg justify-between items-center px-5 sm:rounded-xl sm:m-5 shadow-lg">
      <h2 className="text-gray-800 dark:text-gray-100 text-2xl">
        Olá, <span className="text-orange-700 dark:text-laranja-claro">Usuário</span>!
      </h2>
      <h1 className="text-gray-800 dark:text-white text-5xl font-bold">
        Cook<span className="text-white dark:text-laranja-claro">Up</span>
      </h1>
      <ToggleTheme></ToggleTheme>
    </div>
  )
}

export default Cabecalho;
