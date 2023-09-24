import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchTodos } from '../Redux/userslice';
import axios from 'axios';
import {Link} from "react-router-dom";




function Signupdetails() {

    
  const {data}=useSelector(state=>state.users);
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchTodos())
  },[])

// delete--------------------------
  const handleDelete=(userid)=>{
    axios.delete(`http://localhost:3000/employee/${userid}`).then(()=>{
    const updatedData = data.filter(user=> user.id!== userid);
    dispatch(fetchTodos(updatedData))
    }
    )
}

  return (
    <>
     <div className='container table-responsive p-5'>
     {/* <Link className='btn btn-success btn-md mt-3' to={'/signup'}>Signup</Link> */}
        <table className='table table-bordered table-dark  table-hover border-light text-center'>
           <thead className='table-danger'>
            <tr>
               <th>FirstName</th> 
               <th>LastName</th> 
               <th>Email</th> 
               <th>Passsword</th> 
               <th>Actions</th>
            </tr>
           </thead>
           <tbody>
            {
                data && data.map((res)=>(
                    <tr key={res.id}>
                      <td>{res.firstName}</td>  
                      <td>{res.lastName}</td>
                      <td>{res.email}</td>
                      <td>{res.password}</td>
                      <td><Link className="btn btn-primary" to={`/edituser/${res.id}`}>Edit</Link><button className='btn btn-danger ms-2' onClick={() => handleDelete(res.id)}>Delete</button></td>
                    </tr>
                ))
            }
           </tbody>
        </table>
      <Link className='d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2"' to='/signup'>Create your Account</Link>
     </div>
    </>
  )
}

export default Signupdetails