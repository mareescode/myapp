import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';



function Edituser() {
      const {id}=useParams();
      const {data}=useSelector(state=>state.users);
      const dispatch=useDispatch();
      const existingUser=data.filter( f => f.id == id);
      const {firstName,lastName,email,password}=existingUser[0];
      const {ufName,setufName}=useState(firstName);
      const {ulName,setulName}=useState(lastName);
      const {uemail,setemail}=useState(email);
      const {upassword,setpassword}=useState(password);
      
    
    
      const ubdate=()=>{
      
        console.log(existingUser);
        console.log(firstName);
      

          // setu1Name(updatedData.firstName)
          // setu2Name(updatedData.lastName) 
          // setu2Name(updatedData.email) 
          // setu2Name(updatedData.password) 
         
      }


  return (
    <>
    <div className='container mt-5'>
    <h1 className='text-secondary' onClick={ubdate}>Edit details</h1>  
    <hr/>
  <div className="row">
   <div className="col-md-6">
    <label htmlFor="firstName" className="form-label">FirstName</label>
     <input type="text" className="form-control" name='firstName' value={ufName} placeholder='Enter firstName ' aria-label="FirstName"/>
   </div>
   <div className="col-md-6">
    <label htmlFor="lastName" className="form-label">LastName</label>
     <input type="text" className="form-control" name='lastName' value={ulName} placeholder='Enter lastName '  aria-label="LastName"/>
   </div>
   <div className="col-md-6">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" value={uemail} placeholder='Enter email '  name='email'/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" value={upassword} placeholder='Enter password '  name='password'/>
  </div>
  <div className="col">
  <button className='btn btn-primary btn-md mt-2'>Update</button>
  </div>
 </div>
 </div>
    </>
  )
}

export default Edituser