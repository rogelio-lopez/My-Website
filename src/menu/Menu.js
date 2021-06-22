import React from 'react';
import './Menu.css';

function Menu({ openMenu }) {

    return (
        <nav className={(openMenu)? 'menu menu-active': 'menu'}>

            <div className="menu__links">
                <label>Links</label>
                <ul>
                    <li><a>Skills</a></li>
                    <li><a>Works</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <div className="menu__socials">
                <label>Socials</label>
                <ul>
                    <li><a>Link</a></li>
                    <li><a>Git</a></li>
                    <li><a>Inst</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
