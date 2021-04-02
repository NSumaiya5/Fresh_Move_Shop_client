import React from 'react';
import { useHistory } from 'react-router';

const Product = ({product}) => {


        const history = useHistory()
        const handleCheckOut = (_id) =>{
            history.push(`/products/${_id}`)

    }
    return (
        <div>
        <div className="card mb-4 text-center" style={{width: "19.2rem",height:"26rem",backgroundColor:"rgb(108, 175, 7)"}}>
          <img src={product.imageURL} className="card-img-top" style={{width: "19.1rem",height:"16rem"}} alt=""/> 
        <div className="card-body ">
          <h1 className="card-title">{product.name}</h1>
          <p className="card-text">Weight:{product.weight}</p>
        <div className="card-footer d-flex justify-content-between ">
          <h4>Price:${product.price}</h4>
         <button onClick={() =>handleCheckOut(product._id)} className="btn btn-light">Buy Now</button> 
        </div>
        </div>
        </div>
    </div>
    );
};
  

export default Product;




       

