import React from 'react';
import Burger from './Burger';
import './SideBar.css';


function SideBar({ toggleSideBar, setToggleSideBar }) {

    return (
        <div className={(toggleSideBar)? 'sidebar sidebar-active': 'sidebar'}>

            <Burger 
                toggleSideBar={toggleSideBar} 
                setToggleSideBar={setToggleSideBar} 
            />

            <div className="sidebar-container">

                <div className="navigation">
                    <p>Navigation</p>
                    <ul className="navigation-list">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="resume">
                    <a>resume</a>
                </div>

                <div className="socials">
                    <p>Socials</p>

                    <div className="socials-container">
                        <ul className="socials-list">
                            <li>
                                <a 
                                href="https://github.com/rogelio-lopez"
                                target="_blank" rel="noreferrer"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://www.linkedin.com/in/roge-lopez/"
                                target="_blank" rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://codepen.io/rogelio-lopez"
                                target="_blank" rel="noreferrer">
                                    <i className="fab fa-codepen"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://www.instagram.com/rojo_lopz/"
                                target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar;
