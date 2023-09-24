import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";



function Footer(){
      

    return(
         <div className='container-fluid footercontainer' id='footer'>
         <div className='container p-5 text-center'>
            <h5 className='text-warning '>Copyright & Designed by Marees_waran</h5>
            <Link className=''id='since'>Since 2002</Link><br/>
            <Link className=''id='since'>Html</Link><br/>
            <Link className=''id='since'>Css</Link><br/>
            <Link className=''id='since'>Java Script</Link><br/>
            <Link className=''id='since'>React.js</Link><br/>
            <Link className=''id='since'>Get certified</Link><br/>
         </div>
         </div>
    );
}

export default Footer