import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import './emp.css'

function Emp()
 {
    const [empData,setEmpData]=useState([])
    const [name,setName]=useState()
    const [salary,setSalary]=useState()
    const [id,setId]=useState()

    const getEmployee=()=>{
        axios.get("http://localhost:3000/employee").then(
            res=>{setEmpData(res.data)
            }
            )
    }
    useEffect(()=>{
        getEmployee()
        },[])

    // Add employee......................................
    const addEmployee= () => {
           axios.post('http://localhost:3000/employee', { name,salary}).then(()=>getEmployee())
      }

      //set edit data into form...........
      const setData=(updateEmpData)=>{
            setName(updateEmpData.name)
            setSalary(updateEmpData.salary)
            setId(updateEmpData.id)
      }
      const updateEmployee=()=>{
        axios.put(`http://localhost:3000/employee/${id}`, { name,salary}).then(()=>getEmployee()) 
      }
// delete.................................
    const onDelete=(empid)=>{
            axios.delete(`http://localhost:3000/employee/${empid}`).then(()=>{
            const updatedData = empData.filter(employee=> employee.id!== empid);
            setEmpData(updatedData);
            }
            )
    }

  return (
    <div className="emp container">
        <div className="empForm">
            <input placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)}/>
            <input placeholder='Salary' value={salary} onChange={(event)=>setSalary(event.target.value)}/>
            <button onClick={addEmployee}>submit</button>
            <button onClick={updateEmployee}>Update</button>

        </div>
        <div className="empTable">
       
        <h1>Employee Database</h1>
        <table border="1px" className='table'>
            <thead><tr><th>Name</th><th>Salary</th><th>Action</th></tr></thead>
            <tbody>
                {
                    empData && empData.map(e=>
                        <tr key={e.id}>
                            <td>{e.name}</td><td>{e.salary}</td>
                            <td><button className='btn btn-secondary' onClick={()=>setData(e)}>Edit</button>
                            <button className='btn btn-primary' onClick={()=>onDelete(e.id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Emp