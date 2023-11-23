import ItemFormulario from "../ItemFormulario"

function Contato() {
    return (
        <div>
            <h2>Contatos</h2>
            <p className="fs-5">Fale Conosco</p>
            <ItemFormulario name="nome" label="Nome" tipo="text" ph="Joãozinho"/>
            <ItemFormulario name="email" label="Email" tipo="email" ph="exemplo@hotmail.com"/>
            <ItemFormulario name="assunto" label="Assunto" tipo="text" ph="Compra realiza"/>
            <ItemFormulario name="mensagem" label="Mensagem" tipo="text" ph="Alguns dias atrás..."/>
            <button type="button" class="btn btn-primary">Enviar</button>
        </div>
    )
}

export default Contato