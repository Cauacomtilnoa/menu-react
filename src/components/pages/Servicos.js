import ItemServico from "../ItemServico"

function Servicos() {
    return (
        <div>
            <h2>Serviços</h2>
            <p>Você está na página Servicos</p>
            <div className="d-flex ms-5 gap-3">
                <ItemServico img="https://picsum.photos/200/300" desc="O que aparecer ai" classN/>
                <ItemServico img="https://picsum.photos/200/300" desc="O que aparecer ai"/>
                <ItemServico img="https://picsum.photos/200/300" desc="O que aparecer ai"/>
            </div>
        </div>
    )
}

export default Servicos