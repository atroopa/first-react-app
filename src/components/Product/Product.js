import "./Product.css";

const Product = ({title}) => {


    return <div className="Product">
                <div>{title}</div>
                <div>
                    <button className="btn" onClick={titleHandler}>Title</button>
                </div>
           </div>
}

export default Product;