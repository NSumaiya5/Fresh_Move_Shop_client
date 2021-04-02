import React from 'react';


const ProductManage = ({ product }) => {

        const handleDelete = (id) => {

                fetch(`http://localhost:4200/deleteProduct/${id}`, {
                        method: "DELETE"
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data) { alert('done');
                                        
                                }
                        })
        }

        return (
                <div className="container">
                        <table class="table table-sm table-success text-center table-bordered ">
                                <div class="table-responsive">
                                        <tbody>
                                        <td className="w-25">{product.name}</td>
                                                <td className="w-25">{product.weight}</td>
                                                <td className="w-25">${product.price}</td>
                                                <td className="w-25"><img src={product.imageURL} style={{ height: "80px" }} alt="" /></td>
                                    
                                        <td className="w-25">
                                                <button className="btn btn-danger btn-sm m-4" onClick={() => handleDelete(product._id)} >Delete</button>
                                                </td>
                                        </tbody>
                                </div>
                        </table>
                </div>
        );
};
           
   
export default ProductManage;