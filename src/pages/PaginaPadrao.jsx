import { motion } from 'framer-motion'
import ArtigosLista from '../componentes/Artigo/Artigo'
import CampoTexto from '../componentes/CampoTexto'
import { useState } from 'react'
import data from '../../artigos.json'

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 dark:from-noturno-bg dark:to-noturno-bg transition-colors duration-300"
    >
      <main className="container mx-auto px-4 py-8">
       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CampoTexto 
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Encontre sua receita favorita..."
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <ArtigosLista receitas={filteredData} />
        </motion.div>
      </main>
    </motion.div>
  )
}

export default App