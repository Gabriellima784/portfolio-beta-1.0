import React from "react";

import Header from "./Header";
import Top from "./Top";
import Mid from "./Mid";
import SecondMid from "./SecondMid";
import Footer from "./Footer";
import Carousel from "./Carousel";


export default function Conteudo () {
    return (
        <main className="Conteudo">
            <Header/>
            <Top/>
            <Carousel/>
            <Mid/>
            <SecondMid/>
            <Footer/>
        </main>
    )
}