import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Nav = () => {
    const change=({isActive})=>{
        return{
            backgroundColor:isActive?'green':'red'


        }
    }
    return (<div style={{ backgroundColor: 'black', height: '35px' }}>
        <NavLink to='/' style={change} className="nav">Home</NavLink>
        <NavLink to='about' style={change} className="nav">About</NavLink>
    </div>);
}


export default Nav;