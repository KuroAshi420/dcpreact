import React from "react"
const NavItems = (props) => {
    return <div className="itm">
                <li>
                    <a style={{color: props.clr ? '#00B3A8':'#ababab',}} href="#">{props.children}</a>
                </li>
           </div>
}
export default NavItems