import React from 'react';
import {useState, useEffect} from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import './Products.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import UpdateTheProduct from './UpdateTheProduct';
import AddTheProduct from './AddTheProduct';

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
  
  // function which will get products from API to display
  async function getProducts() {

    await fetch(PRODUCTS_API_URL)
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
 
	return (
		<div className="productsPg">
		<h1>Inventory Management System - Products</h1>

		{/* AddTheProduct Component */}
		<AddTheProduct getProducts={getProducts} PRODUCTS_API_URL={PRODUCTS_API_URL} />
	  
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
