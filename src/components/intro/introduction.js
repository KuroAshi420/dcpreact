import React from "react"
import Logo from "./logo"
import Title from "./titre"
import ParagGrid from "./pagragheGrid"
const Intro = (props) => {
    return <div className="flex-container">
                <Logo/>
                <Title/>
                <div className="flex-container1">
                <ParagGrid>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</ParagGrid>
                <ParagGrid>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</ParagGrid>

                </div>
               
           </div>
}
export default Intro