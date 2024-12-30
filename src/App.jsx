
import './App.css'
import Cabecalho from './componentes/cabecalho'

function App() {


  return (
   <div className="min-h-screen bg-orange-50 dark:bg-noturno-bg transition-colors duration-300">
    <Cabecalho></Cabecalho>
    <h1 className="text-gray-800 dark:text-gray-100 px-5">Welcome</h1>
   </div>
  )
}

export default App
