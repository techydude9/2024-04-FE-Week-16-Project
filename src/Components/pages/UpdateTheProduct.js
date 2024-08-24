import './Products.css'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

function UpdateTheProduct ({getProducts, productObject, PRODUCTS_API_URL}) {
/* updateProduct function */
  //define useState variable and function for updating products
  const [updatedProductCode, setUpdatedProductCode] = useState('')
  const [updatedProductImage, setUpdatedProductImage] = useState('https://')
  const [updatedProductDescription, setUpdatedProductDescription] = useState('')
  const [updatedProductPrice, setUpdatedProductPrice] = useState('')
  const [open, setOpen] = useState(false);

  //Debugging
  // console.log(PRODUCTS_API_URL);
  // console.log(getProducts);

  // async function which handles the updating of the product elements
  async function updateProduct(e, productObject){
    e.preventDefault()
    
    let product = {
      ...productObject,
      code: updatedProductCode,
      image: updatedProductImage,
      description: updatedProductDescription,
      price: updatedProductPrice,
    }

    await fetch(`${PRODUCTS_API_URL}/${productObject.id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }) .then(() => getProducts())
         
  } 

  return (
    <>
    <tr>
      <Button
          onClick={() => setOpen(!open)}
          aria-controls="updateThisItem"
          aria-expanded={open}
        >
        Update this Item
        </Button>
    </tr>
    <Collapse in={open}>
      <tr id='updateThisItem'>     
        <td>
          <input placeholder='Update Product Code' onChange={(e) => setUpdatedProductCode(e.target.value)}></input>
        </td>
        <td>
        <input placeholder='Update Product Image URL' onChange={(e) => setUpdatedProductImage(e.target.value)}></input>
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
    </Collapse>
    </>
    )
}
  export default UpdateTheProduct;
