function ItemServico(props) {
    return (
        <div className="d-inline"> 
            {/* <img src={props.img} alt="" />
            <p>{props.desc}</p> */}
            <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                
                <p className="card-text">{props.desc}</p>
                
            </div>
            </div>
        </div>
    )
}

export default ItemServico;