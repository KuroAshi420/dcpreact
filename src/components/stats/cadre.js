import React from "react"

const Stat=(props)=>{
    return <div className="two-bloc">{props.infoStats.map(e=>(
       <div className="bx" style={{marginTop:e.margin}}>
            <img scr={e.image} srcset={e.imageset}/>
             <h3 className="title">{e.title}</h3>
             <p className="sub-title">{e.countries}</p>
        </div> ))}
      </div>
}
export default Stat