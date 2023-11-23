function ItemServico(props) {
    return (
        <div className="d-inline"> 
            {/* <img src={props.img} alt="" />
            <p>{props.desc}</p> */}
            <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    )
}

export default ItemServico;