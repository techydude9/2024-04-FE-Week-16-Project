import './Products.css'
import {useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

function UpdateTheProduct ({getProducts, productObject, PRODUCTS_API_URL}) {
/* updateProduct function */
  //define useState variable and function for updating products
  const [updatedProductCode, setUpdatedProductCode] = useState('')
  const [updatedProductImage, setUpdatedProductImage] = useState('https://')
  const [updatedProductDescription, setUpdatedProductDescription] = useState('')
  const [updatedProductPrice, setUpdatedProductPrice] = useState('')

  console.log(PRODUCTS_API_URL);
  console.log(getProducts);

  function updateProduct(e, productObject){
    e.preventDefault()
    
    let product = {
      ...productObject,
      code: updatedProductCode,
      image: updatedProductImage,
      description: updatedProductDescription,
      price: updatedProductPrice,
    }

    fetch(`${PRODUCTS_API_URL}/${productObject.id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }) .then(() => getProducts())
         
  } 

  return (
    <tr>
      <td>
        <input placeholder='Update Product Code' onChange={(e) => setUpdatedProductCode(e.target.value)}></input>
      </td>
      <td>
      <input placeholder='Update Product Image' onChange={(e) => setUpdatedProductImage(e.target.value)}></input>
      </td>
      <td>
        <input placeholder='Update Description' onChange={(e) =>setUpdatedProductDescription(e.target.value)}></input>
      </td>
      <td>  
        <input placeholder='Update Price' onChange={(e) => setUpdatedProductPrice(e.target.value)}></input>
      </td>
      <td>
        <button className="btn btn-primary btn-sm mb-3" onClick={(e) => updateProduct(e, productObject)}>Update</button>
      </td>
    </tr>
    )
}
  export default UpdateTheProduct;
