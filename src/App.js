import { useState } from 'react';
import ProductList from "./components/ProductList/ProductList";

const App = () => {

    const [products, setProducts] = useState(
        [
            {id: 1, title:"Book 1"},
            {id: 2, title:"Book 2"},
            {id: 3, title:"Book 3"}
        ]
    );



    return (
    <div className="container">
        <ProductList products={products} />
    </div>
    )
}

export default App;