import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Products.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


function AddTheProduct ({getProducts, PRODUCTS_API_URL}) {

    //define useState variable and functions for adding and updating products
    const [newProductCode, setNewProductCode] = useState('')
    const [newProductImage, setNewProductImage] = useState('')
    const [newProductDescription, setNewProductDescription] = useState('')
    const [newProductPrice, setnewProductPrice] = useState('')

    /* postNewProducts function */
  async function postNewProduct(e){
    e.preventDefault()

    await fetch(PRODUCTS_API_URL, {
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({
			code: newProductCode,
			image: newProductImage,
			description: newProductDescription,
			price: newProductPrice,
		  })
	  })
		.then(() => getProducts())
	}

    return (
        <>
        <Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					Enter New Product Info</Accordion.Header>
				<Accordion.Body>
					<div className="card">
						<form className="card-body">
						<div className="form-group">
						<label htmlFor="inNewCode">Product Code:</label>
						<input className="form-control" type="text" placeholder='Product Code' 
							onChange={(e) => setNewProductCode(e.target.value)}></input>
						<label htmlFor="inNewImage">Product Image:</label>
						<input className="form-control" type="url" placeholder='Product Image' 
							onChange={(e) => setNewProductImage(e.target.value)}></input>
						<label htmlFor="inNewDescription">Description:</label>
						<input className="form-control" type="text" placeholder='Description'
							onChange={(e) => setNewProductDescription(e.target.value)}></input>
						<label htmlFor="inNewPrice">Price:</label>
						<input className="form-control" type="text" placeholder='Price'
							onChange={(e) => setnewProductPrice(e.target.value)}></input>
						</div>
						<div>
						<button className="btn btn-info mt-2" onClick={(e) => postNewProduct(e)}>Add Product</button>
						</div> 
					</form>
					</div>
				</Accordion.Body>
			</Accordion.Item>
	   </Accordion>
    </>
    )
}

export default AddTheProduct