import './AddProduct.css';
import { useState } from 'react';


const AddProduct = () =>{

    const [title, setTitle] = useState('');

    return(
        <div>
            <form className='add-product-form'>
                <div className='form-control'>
                    <input 
                        type="text" 
                        placeholder='Add Product' 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </div>
                <button className='form-btn' type='submit'>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;