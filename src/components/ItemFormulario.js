function ItemFormulario(props) {
    return(
        <p>
            <label style={{paddingRight: "3px"}}  for={props.name}>{props.label}: </label>
            <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph}/>
            
        </p>
    )
}

export default ItemFormulario;