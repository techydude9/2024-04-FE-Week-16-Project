import React from 'react';
import {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Products.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import UpdateTheProduct from './UpdateTheProduct';

function Products() {

	// set const to URL of mockAPI db resource
	const PRODUCTS_API_URL = 'https://66b3d01e7fba54a5b7ee41d6.mockapi.io/api/wk15Lab/products'

	// define default product
	const [products, setProducts] = useState([{
	  code: 'Lava Lamp',  // rename productName to ProductCode
	  image: 'No image available',
	  description: 'Multi color flowing Lava Lamp based on oringinal 70s design',
	  price: '24.99'
	}]);
  
	//define useState variable and functions for adding and updating products
	const [newProductCode, setNewProductCode] = useState('')
	const [newProductImage, setNewProductImage] = useState('')
	const [newProductDescription, setNewProductDescription] = useState('')
	const [newProductPrice, setnewProductPrice] = useState('')
  
  // function which will get products from API to display
  function getProducts() {

    fetch(PRODUCTS_API_URL)
      .then(data => data.json())
      .then(data => setProducts(data))
    
      console.log(products);
    }
    
  // useEffect state function
    useEffect(() => {
        getProducts()
        }, []) 
    
  /* deleteUser function */
  function deleteProduct(id){
    fetch(`${PRODUCTS_API_URL}/${id}`, {
      method: 'DELETE'})
      .then(() => getProducts())
  }

  /* postNewProducts function */
  function postNewProduct(e){
    e.preventDefault()

    fetch(PRODUCTS_API_URL, {
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
		<div className="productsPg">
		<h1>Inventory Management System - Products</h1>
	 
	   {/* HTML for adding new Products */}
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
	 
		 {/* HTML for display all the products */}
		 <div id="mapdiv" className="container-fluid mt-3 table-responsive">
		   <table className="table table-bordered table-hover">
			 <thead>
			   <tr className="col">
				 <th>Product Code</th>
				 <th>Image</th>
				 <th>Description</th>
				 <th>Price</th>
				 <th>Delete</th>
			   </tr>
			 </thead>
			 <tbody className='border-success'>
			   {products.map((product, index)=> {
				   return ( 
				   <>
				   <tr key={index} className="mb-0">
					 <td>{product.code}</td>
					 <td> <img src={product.image} alt="product image" width="100" height="100"></img></td>
					 <td>{product.description}</td>
					 <td>{product.price}</td>
					 <td>
					  <button className="btn btn-warning" onClick={() => deleteProduct(product.id)}>
					  🗑
					  </button>
					 </td>
				   </tr>
					 <UpdateTheProduct getProducts={getProducts} productObject={product} PRODUCTS_API_URL={PRODUCTS_API_URL} />
				   <br></br>
				  </>
					)
				 })} 
			 </tbody>
		   </table>
		 </div>
	   </div>	
	);	
}

export default Products
