import './App.css'
import Cabecalho from './componentes/cabecalho'
import ArtigosLista from './componentes/Artigo/Artigo'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 dark:from-noturno-bg dark:to-noturno-bg transition-colors duration-300">
      <Cabecalho />
      <h1 className="text-gray-800 dark:text-gray-100 px-5">Welcome</h1>
      <ArtigosLista /> 
    </div>
  )
}

export default App
