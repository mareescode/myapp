import React,{memo,useState,useEffect} from 'react';
import axios from 'axios';

function Pagination() {
   
 const [Data,setData]=useState([]);
 const [currentpage,setcurrentpage]=useState(1);
 const recordsperpage=10;
 const lastIndex=currentpage*recordsperpage;
 const firstIndex=lastIndex-recordsperpage;
 const records=Data.slice(firstIndex,lastIndex);
 const npage=Math.ceil(Data.length/recordsperpage);
 const numbers=[...Array(npage+1).keys()].slice(1);

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
    },[]);

   function prepage() {
    if (currentpage!== 1) {
        setcurrentpage(currentpage-1)
    }
   }

   function changeCpage(id) {
    setcurrentpage(id)
   }

   function nextpage() {
    if (currentpage!== npage) {
        setcurrentpage(currentpage+1) 
    }
   }


  return (
      <div className='container-fluid bgimg table-responsive'>
        <table className='table table-bordered table-hover opacity-75'>
        <thead className='table-light'>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            </tr>
        </thead>
        <tbody className='table-dark'>
            {records.map((d,i)=>(
               <tr key={i}> 
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.salary}</td>
               </tr>
            ))}
        </tbody>
    </table>
    <div className='pagi w-25 m-sm-auto'>
    <nav>
        <ul className='pagination'>
            <li className='page-item'>
                <a href='#' className='page-link' onClick={prepage}>prev</a>
            </li>
             {
                numbers.map((n,i)=>(
                    <li className={`page-item ${currentpage === n?'active':''}`} key={i}>
                        <a href='#'className='page-link' onClick={()=>changeCpage(n)}>{n}</a>
                    </li>
                ))
             }
            <li className='page-item'>
                <a href='#' className='page-link' onClick={nextpage}>Next</a>
            </li>
        </ul>
    </nav>
    </div>
      </div>
  )
}

export default memo(Pagination);