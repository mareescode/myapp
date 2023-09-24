import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function Tablehead() {
        
    return(
     <thead className='table-warning'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Action</th>
        </tr>
     </thead>
    )  
}

function Tablebody(props) {

    const tablebody=props.tablebodyData.map((data)=>{
        return(
            <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.course}</td>
            <td><button className='btn btn-danger' onClick={()=>props.ubdatedatas(data.id)}>Delete</button></td>
            </tr>
        )
    })
  
    return(
        <tbody>
          {tablebody}
        </tbody>
    ) 
}


function Table(props) {

  return (
    <div className='container mt-5'>
    <h1>Table</h1>
    <div className="table-responsive">
    <table className='table table-dark table-hover'>
    <Tablehead/>   
    <Tablebody ubdatedatas={props.ubdatedata} tablebodyData={props.tabledata}/>
    </table>
    </div>
         <form>
          <label>ubdatename</label>
          <input type='text' onChange={e=>(e.target.value)}/> 
          <label>ubdateage</label>
          <input type='text' onChange={e=>(e.target.value)}/>
          <label>ubdatecourse</label>
          <input type='text'onChange={e=>(e.target.value)}/>
          <button onClick={()=>props.ubdateDatachange()}>Submit</button>
         </form>
    </div>
  )
}

export default Table