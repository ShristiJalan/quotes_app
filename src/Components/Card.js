function Card(props) {
    return (
        <div className="card my-3" style={{ width: "80vw" }}>

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="https://getbootstrap.com/docs/5.2/components/card/" className="btn btn-danger">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;