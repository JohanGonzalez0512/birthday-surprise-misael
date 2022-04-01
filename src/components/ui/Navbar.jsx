import React from 'react'
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <div className='navbar'>
           
                <NavLink className='navbar__link' to="/" >Pista 1 </NavLink>
            
           
                <NavLink className='navbar__link' to="/pista-2" >Pista 2 </NavLink>
           
           
                <NavLink className='navbar__link'  to="/pista-3" >Pista 3 </NavLink>
          
           
                <NavLink className='navbar__link' to="/pista-4" >Pista 4 </NavLink>
           
        </div>
    )
}
