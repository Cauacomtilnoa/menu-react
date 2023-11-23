import React from "react";
import praia from './fundo-praia.jpg';

function Home() {
    return (
        <div>
            <h2 className="text-center">Home</h2>
            
            <img src={praia} alt=""/>
                
            <p className="mt-3 fs-3">Essa é a nossa página inicial, sinta-se muito bem-vindo</p>
        </div>
    )
}

export default Home