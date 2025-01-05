import PaginaPadrao from './src/pages/PaginaPadrao'
import Cabecalho from './src/componentes/cabecalho'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReceitaPage from './src/pages/ReceitaPage';
import NotFound from './src/pages/NotFound';
import { useState } from 'react';
import Form from './src/componentes/Form';

const Rotas = () => {
      const [user,setUser] = useState()
      const hasUser = Boolean(user)
    return(

        <BrowserRouter>
        <Cabecalho user={user}></Cabecalho>
           { hasUser && <Routes>
                <Route path="/" element={<PaginaPadrao/>}> </Route>
                <Route path="/receita/:id" element={<ReceitaPage />}> </Route>
                <Route path="*" element={<NotFound></NotFound>} />
            </Routes>}
            {hasUser || <Form onSubmit={setUser}></Form>}
        </BrowserRouter>
    
    )
}
export default Rotas;