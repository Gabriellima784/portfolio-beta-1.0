import React from "react";

import Header from "./Header";
import Top from "./Top";
import Carousel from "./Carousel";


export default function Conteudo () {
    return (
        <main className="Conteudo">
            <Header/>
            <Top/>
            <Carousel/>
        </main>
    )
}