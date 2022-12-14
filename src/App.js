import { useState } from 'react';
import ProductList from "./components/ProductList/ProductList";
import AddProduct from './components/AddProduct/AddProduct';

const App = () => {

    const [products, setProducts] = useState(
        [
            {id: 1, title:"Book 1"},
            {id: 2, title:"Book 2"},
            {id: 3, title:"Book 3"}
        ]
    );

    const addProduct = () => {
        console.log(title)
    }

    const deleteProduct = (id) => {
        setProducts(products.filter((item)=> item.id !== id));
    }

    return (
    <div className="container">
        <AddProduct/>
        <ProductList products={products} onDelete={deleteProduct} />
    </div>
    )
}

export default App;