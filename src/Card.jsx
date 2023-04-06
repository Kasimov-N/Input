const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="price">
                <h2>Category : {data.category}</h2>
                <h2>Price : {data.price}</h2>
            </div>
        </div>
    )

}
export default Card