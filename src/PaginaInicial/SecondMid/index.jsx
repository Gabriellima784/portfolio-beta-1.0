import React from "react";
import "./styles.css"


const SecondMid = () => {
    return (
        <>
        <div id="background2">
          <h1 className="text-gray-100 " id="port">Portfolio</h1>
            <p id="texto">Aqui você irá contemplar os principais projetos já</p>  
                <p id="texto">criados, e publicados por mim. Ao clicar sobre ele, além</p> 
                    <p id="texto">de ter acesso na integra, você também poderá visualizar</p>  
                        <p id="texto">os códigos no GitHub, e as informações sobre o projeto.</p>
                          <br></br>
                        
                      <div id="container2">

                        
                      <div id="card" className="bg-black"> 
                        <h1>Food Commerce</h1>
                          <a href="https://food-commerce-delta.vercel.app/" target="blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/Nh8Jzq1.png" alt="Food Commerce"/>
                          </a>

                          <a href="https://github.com/Gabriellima784/food-commerce" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/ecyWOWs.png" alt="Github" className="logo" />
                          </a>
                          <p className="hover-text">Loja de pedidos online com BackEnd produzido em NodeJS e FrontEnd em React.</p>
                      </div>  
                        
                        

                      <div id="card2" className="bg-black"> 
                        <h1>Password Generator</h1>
                          <a href="https://gabriellima784.github.io/password-generator/" target="blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/n1pWovM.png" alt="Password Generator"/>
                          </a>
                          <a href="https://github.com/Gabriellima784/password-generator" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/ecyWOWs.png" alt="Github" className="logo" />
                          </a>
                          <p className="hover-text2">Projeto construido em JavaScript Vanilla, para estudo de lógica de programação aplicada a casos reais.</p>
                      </div>  

                       


                        
                        <div id="card3" className="bg-black">
                        <h1>Batman Site</h1> 
                        <a href="https://gabriellima784.github.io/Batman/" target="blank" rel="noopener noreferrer">
                          <img src="https://i.imgur.com/qgNSq7N.png" alt="Batman Site"/>
                        </a>
                        <a href="https://github.com/Gabriellima784/Batman" target="_blank" rel="noopener noreferrer">
                          <img src="https://i.imgur.com/ecyWOWs.png" alt="Github" className="logo" />
                        </a>
                        <p className="hover-text2">Meu primeiro site com HTML,CSS e JavaScript construído, nele também foi aplicado um BackEnd para exibição dos comentários em tempo real na tela.</p>
                        </div>  

              </div>
            </div>
          <br></br>
        </>
    )   
}

export default SecondMid;