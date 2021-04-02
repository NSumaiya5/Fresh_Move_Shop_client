import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {

    const [products ,setProducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4200/products`)
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    const spinnerStyle = {
        width : '200px',
        marginLeft : '500px'
    }
    return (
        <div className="row mx-auto container mt-5 text-white">
            {
                products.length ? "" : <img style={spinnerStyle} src="https://gifimage.net/wp-content/uploads/2017/11/fidget-spinner-gif-transparent-8.gif" alt=""/>
            }
        {
            products.map(product=><div className=" col-md-4 col-sm-12"><Product product={product}> </Product></div>)
        }

    </div>

    );
};

export default Home;

