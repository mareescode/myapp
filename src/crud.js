import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Crud() 
{
    const [data, setData] = useState([]);
    const [newEmpName, setNewEmpName] = useState("");
    const [newEmpSalary,setNewEmpSalary]=useState(0)
    const [updatedEmp, setUpdatedEmp] = useState(null);
    const [eid,setEid]=useState()


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employee');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



// const fetch1=()=>{
//     axios.get('http://localhost:3000/employee').then(response=>setData(response.data)).catch(err=>console.error(err))
// }

const addEmployee=()=>{
    axios.post('http://localhost:3000/employee',{name:newEmpName,salary:newEmpSalary}).then(()=>fetchData())
}

const deleteEmployee=(eid)=>{
    axios.delete(`http://localhost:3000/employee/${eid}`).then(()=>fetchData())
}

const setEmployeeData=(emp)=>{
setNewEmpName(emp.name)
setNewEmpSalary(emp.salary)
setEid(emp.id)
}


const updateEmployee=()=>{
    axios.put(`http://localhost:3000/employee/${eid}`,{name:newEmpName,salary:newEmpSalary}).then(()=>fetchData())
}

  return (
    <div className=' bg-info'>
        <h1 className="text-center">CRUD Operations</h1>
           
           <table className='table'>
            <thead>
                <tr><th>Name</th><th>Salary</th><th>Actions</th></tr>
            </thead>
            <tbody>
            {/* To display employee data in table */}
            {
                data && data.map(employee=><tr key={employee.id}><td>{employee.name}</td><td>{employee.salary}</td><td><button onClick={()=>setEmployeeData(employee)}>Edit</button><button onClick={()=>deleteEmployee(employee.id)}>Delete</button></td></tr>)
            }
            </tbody>
          </table>
        <h2 className='text-center'>{updatedEmp?"Edit Emplyee Data":"Add Employee Data"}</h2>
        <input
        type="text"
        placeholder='name'
        value={newEmpName}
        onChange={e =>setNewEmpName(e.target.value) }
      />
       <input
        type="text"
        placeholder='salary'
        value={newEmpSalary}
        onChange={e =>setNewEmpSalary(e.target.value) }
      />
      <button onClick={addEmployee}>AddEmployee</button>
      <button onClick={updateEmployee}>UpdateEmployee</button>
        </div>
  )
}

export default Crud