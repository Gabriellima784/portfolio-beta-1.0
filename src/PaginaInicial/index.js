import React from "react";

import Header from "./Header";
import Top from "./Top";
import Mid from "./Mid";
import SecondMid from "./SecondMid";
import Footer from "./Footer";


export default function Conteudo () {
    return (
        <main className="Conteudo">
            <Header/>
            <Top/>
            <Mid/>
            <SecondMid/>
            <Footer/>
        </main>
    )
}