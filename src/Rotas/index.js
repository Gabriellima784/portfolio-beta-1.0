import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conteudo from "../PaginaInicial";

const Rotas = () => (
    <>
     <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Conteudo />} />
        </Routes>
     </BrowserRouter>
    </>
)

export default Rotas; 