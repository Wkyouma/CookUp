import PaginaPadrao from './src/pages/PaginaPadrao'
import Cabecalho from './src/componentes/cabecalho'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReceitaPage from './src/pages/ReceitaPage';
import NotFound from './src/pages/NotFound';
import { useState } from 'react';
import Form from './src/componentes/Form';

const Rotas = () => {
    const [user, setUser] = useState()
    const hasUser = Boolean(user)

    return (
        <div className='min-h-screen flex flex-col bg-slate-100 dark:bg-noturno-bg'>
            <BrowserRouter>
                <Cabecalho user={user} />
                <main className="flex-1 flex flex-col">
                    {hasUser ? (
                        <Routes>
                            <Route path="/" element={<PaginaPadrao />} />
                            <Route path="/receita/:id" element={<ReceitaPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <Form onSubmit={setUser} />
                        </div>
                    )}
                </main>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;