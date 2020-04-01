import React from 'react'
import './brands.css'

const Brand = (props) =>{
    
       let x = <svg xmlns="http://www.w3.org/2000/svg" width="170" height="32" viewBox="0 0 200 32">
    <path d={props.path}></path>
    </svg> 
   
    
    return  <a href="#" target="">
                <div className="svg">                    
                {props.path.map(e=>( <svg xmlns="http://www.w3.org/2000/svg" width="170" height="32" viewBox="0 0 200 32"><path d={e}></path></svg>))}
                </div>
            </a>
}
export default Brand 