import './App.css'
import Cabecalho from './componentes/cabecalho'
import ArtigosLista from './componentes/Artigo/Artigo'
import CampoTexto from './componentes/CampoTexto'
import { useState } from 'react'
import data from '../artigos.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    
    const filtered = data.filter(item => 
      item.title.toLowerCase().includes(term) || 
      item.tags.toLowerCase().includes(term)
    )
    setFilteredData(filtered)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 dark:from-noturno-bg dark:to-noturno-bg transition-colors duration-300">
      <Cabecalho />
      <main className="container mx-auto px-4 py-8">
        <CampoTexto 
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Encontre sua receita favorita..."
        />
        <div className="mt-8">
          <ArtigosLista receitas={filteredData} />
        </div>
      </main>
    </div>
  )
}

export default App