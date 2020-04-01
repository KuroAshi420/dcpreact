import React from 'react'
import './office.css'
import CardBox from './cadre'

let boxList1 =[
       {
         image:"https://www.docplanner.com/images/warsaw.png",
         h3:"Warsaw"
       },
       {
        image:"https://www.docplanner.com/images/barcelona.png",
        h3:"Barcelona"
      },
      {
        image:"https://www.docplanner.com/images/istanbul.png",
        h3:"Istanbul"
      }]
      let boxList2 =[ {
        image:"https://www.docplanner.com/images/rome.png",
        h3:"Rome"
      },
      {
        image:"https://www.docplanner.com/images/mexico-city.png",
        h3:"Mexico City"
      },
      {
        image:"https://www.docplanner.com/images/curitiba.png",
        h3:"Curitiba"
      }
]

function Offices (){
    return <div className="part1-two">
        <div className="row1"><CardBox cardContent={boxList1}/></div>
        <div className="row2"><CardBox cardContent={boxList2}/></div>
        
    </div>
}
export default Offices;