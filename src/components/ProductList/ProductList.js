import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({products}) => {
    return (
        <div className='Product-list'>
            {products.map((item) => {
                return <Product key={item.id} title={item.title}/>
            })}
        </div>
    );
}

export default ProductList;