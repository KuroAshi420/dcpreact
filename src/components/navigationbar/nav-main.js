import React from 'react';
import './nav.css';
import NavLogo from './nav-logo';
import NavItems from './nav-items'
import DropDownMenu from './drop-down'

function Navbar () {
    return <div className="nav-menu">
     <div> <NavLogo/></div>
       <div>
         <ul className="nav-menu-list">
             <NavItems clr={true}>About us</NavItems>
             <NavItems>Career</NavItems>
             <NavItems>Departements
               <DropDownMenu/>
             </NavItems>
         </ul>
        </div>

    </div>
    }


export default Navbar;