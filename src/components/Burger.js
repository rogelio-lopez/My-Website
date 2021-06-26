import React from 'react';
import './Burger.css';

function Burger({ toggleSideBar, setToggleSideBar }) {

    const toggle = () => setToggleSideBar(!toggleSideBar); 

    return (
        <div className={(toggleSideBar)? 'burger burger-active' : 'burger'} onClick={toggle}>
            <span></span>
        </div>
    )
}

export default Burger
