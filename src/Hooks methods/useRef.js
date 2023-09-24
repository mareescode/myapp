import React,{useRef} from 'react'

function UseRef() {

  const colorparagraph=useRef(null); // colorparagraph={current:null}
  const colors=['#d529d0','#03a9f4','#d14614fa','#d51858','#9c27b0','#ffc107','#ff5722','#61dafb','#4caf50','#07600a','#65e96a'];


  const changecolor=()=>{
    const randomcolor=Math.floor(Math.random()*colors.length);
    colorparagraph.current.style.color=colors[randomcolor]
   }

  return (
    <div className='text-center'>
       <button onClick={()=>changecolor()}>click me</button>
       <h1 className='display-1 ' ref={colorparagraph}>Greetings All</h1>
    </div>
  )
}
export default UseRef