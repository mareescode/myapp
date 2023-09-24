import React, { useEffect } from 'react';
import { getproducts } from './productslice';
import { useDispatch,useSelector } from 'react-redux';
import { add } from './cartslice';
import './main.css';


function Product() {

 const dispatch=useDispatch();
 const {data:products,status}=useSelector(state=>state.products);

 useEffect(()=>{
   dispatch(getproducts())
  },[])

 

  if (status === 'loading'){
   return <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="button" disabled>
             <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
             <span role="status">Loading...</span>
            </button>
        </div>
  }
  if (status === 'error') {
   return alert("something went wrong!!! please try again later")
  }

 const addtocart=(product)=>{
  dispatch(add(product)) 
 }

  return (

  <>
    <div className='container productcontainer '>
   
    <div className='row gap-2'>

  {products.map((product)=>(
   <div key={product.id} className="card mt-4" style={{width:"200px"}}>
    <div className='inner m-auto'>
   <img src={product.image}  className="card-img-top" style={{width:"100px",height:"150px"}}/>
   </div>
   <div className="card-body text-center">
     <h5 className="card-title">{product.title}</h5>
   </div>
   <div>
    <p className='cart-text text-center text-warning'>{product.rating.rate +"Ratings"}</p>
   <p className="card-text text-center">$:{product.price}</p>
   </div>
   <div className="card-footer d-grid">
  <button  id='cardbutton' type="button" onClick={()=>addtocart(product)}>Add to Cart</button>
 </div>
 </div>
  ))}
    </div>
   </div>
   </>
  )
}

export default Product;