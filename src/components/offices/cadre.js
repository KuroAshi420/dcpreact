import React from 'react'
import './office.css'
import Bouttons from './boutton'


const CardBox = (props) => {
    return <div className="all">{props.cardContent.map(e=>(
        <div className="office">
             <img src ={e.image}/>   
          <div className="sous-img">
             <h3>{e.h3}</h3>
             <Bouttons/>
          </div>  
        </div>))}
    </div>
}
export default CardBox