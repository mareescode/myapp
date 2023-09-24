import React,{useEffect,useState} from 'react'

function UseEffect() {

    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
//  componentDidMount().....
    useEffect(()=>{
        console.log('ComponentDidMount');
    })

//  componentDidUpdate().....
    useEffect(()=>{
        console.log('ComponentDidUpdate');
    },[])

//  3rd............
    useEffect(()=>{
        console.log('ComponentDidremoved');
    },[count])

  return (
    <div className='text-center'>
    <h1>Counter</h1>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseEffect