import React, { useEffect, useState } from 'react';
import ProductManage from '../ProductManage/ProductManage';

const ManageProduct = () => {
    const [products ,setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://hidden-falls-79989.herokuapp.com/products`)
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row mx-auto container mt-5 text-white">
        {
            products.map(product=><div className=" col-md-12 col-sm-12"><ProductManage product={product}> </ProductManage></div>)
        }
    </div>
    );
};

export default ManageProduct;

