import React from "react"
import Stat from "./cadre"
import "./main.css"
import logo from "./logo.png"

let statsList1=  [
                 { 
                    image: "https://www.docplanner.com/img/flag.png ",
                    imageset: "https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
                    title:"Leader in 10 countries",
                    countries: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",

                 },
                 { 
                    image: "https://www.docplanner.com/img/visits.png",
                    imageset: "https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
                    title:"1.5 million appointments",
                    countries: "booked last month",
                    margin:"-15px"
                 }
                ]

let statsList2=  [ 
                 { 
                    image: "https://www.docplanner.com/img/patients.png",
                    imageset: "https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
                    title:"30 million unique patients",
                    countries: "visit us every month"
                 },
                 { 
                    image: "https://www.docplanner.com/img/doctors.png",
                    imageset: "https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",
                    title:"2 million active doctors",
                    countries: "trust in our solutions",
                    margin:"-15px"
                 }
                ]
               

function Stats (){
    return <div className="part2">
                <div className="left-part">
                    <div className="spn">The world's
                        <br/>biggest healthcare platform</div>
                    <p>We work from 6 offices all over the world, bringing Docplanner <br/>Group to life in almost 20 countries.</p>
                    <div className="img-part">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="right-part">
                    <div className="coln1">
                        <Stat infoStats={statsList1}/>                     
                    </div>
                    <div className="coln2">
                        <Stat infoStats={statsList2}/>                     
                    </div>
                </div>
           </div>
}
export default Stats