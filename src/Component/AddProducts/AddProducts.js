import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setMageURL] = useState(null);

    const onSubmit = (data,e) => {
      e.target.reset();
      const productData = {
        name:data.productName,
        price:data.productPrice,
        weight:data.productWeight,
        imageURL:imageURL
      };

      const url = `https://hidden-falls-79989.herokuapp.com/addProduct`;
      console.log(productData);fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
      .then(res => console.log('server side response'))
    };
     

    const handleImageUpload = product => {
        console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key','6b56611265eb82a0f6fd0bd958565bdc');
        imageData.append('image',product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
          <h1>Add Product</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 bg-primary shadow mt-5 p-5 rounded">
               
                <div className="col-md-6">
                    <label className="form-label "><b>Product Name</b></label>
                    <input   type="text" name="productName" className="form-control"  placeholder="New product" ref={register} />
                </div>

                <div className="col-md-6">
                    <label className="form-label "><b>Product Price</b></label>
                    <input type="text" name="productPrice" className="form-control"  placeholder="price" ref={register} />
                </div>

                <div className="col-md-6">
                    <label className="form-label "><b>Product weight</b></label>
                    <input type="text" name="productWeight" className="form-control"  placeholder="weight" ref={register} />
                </div>

                       <div className="col-md-6">
                    <label className="form-label "><b>Add Photo</b></label>
                    <input className="form-control" type="file" onChange={handleImageUpload} />
                </div>
                <div>
                    <input type="submit" className="mt-3 ml-3 btn btn-dark" />
                </div>
            </form>
           
            
        </div>
    );
};

export default AddProducts;
