import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShop,faCartShopping,faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,remove} from './cartslice'



function Header(){

const numberofcart=useSelector((state)=>state.cart.number);
const carts=useSelector(state=>state.cart.value)
const total=useSelector(state=>state.cart.total)
const quantity=useSelector((state)=>state.cart.quantity)
const dispatch=useDispatch();

const handleremove = (data) => {
  const updatedItems = carts.filter(item => item.id !== data);
  dispatch(remove(updatedItems));
};



return(
  <div  className='container-fluid maincontainer'>
    {/* This is header------------------------------------- */}
          <div  className="container">
            <nav className="navbar navbar-expand-md ">
                     <Link className="navbar-brand " to="/"><FontAwesomeIcon icon={faShop}/>MYSTORE</Link>
               {/* serach box start-------------------------------------- */}
                        <input id='serachbox' type="search" placeholder="Search Products" aria-label="Search" />
                       <button type='submit' id='serachbutton'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
               {/*serach box end-------------------------------------------  */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                        <Link className="nav-link " to="/signup">Signup</Link>
                        </li>
                        <li className='nav-item '>
                        <Link className="nav-link  ms-auto" to="/cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><FontAwesomeIcon icon={faCartShopping}/>{numberofcart}</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link " to="/profile"><FontAwesomeIcon icon={ faUser}/></Link>
                        </li>
                        </ul>
           </div>     
       </nav>                
     </div>
{/* This is cart items added------------------ */}
<div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart Items</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  { carts.map((data)=>(
  <div key={data.id} className="card mt-5" style={{maxwidth:"100px",height:"250px"}}>
  <button type="button" className="btn-close ms-auto fs-3 mt-2" aria-label="Close" onClick={()=>dispatch(handleremove(data.id))}></button>
  <div className="row g-0">
    <div className="col">
      <img src={data.image} className="img-fluid rounded-start" style={{width:"100px",height:"150px"}} alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title fs-6">{data.title}</h5>
        <p className="card-text fs-6">price:{data.price}</p>
        <p className=''>quantity:{quantity}</p>
        <button className='' onClick={()=>dispatch(decrement(data.price))}>-</button>
        <button className='' onClick={()=>dispatch(increment(data.price))}>+</button>
        <p>Total:{total}</p>
        </div>  
    </div>
  </div>
</div>
   ))}
  </div>
</div>
  </div>
    );
}

export default Header;