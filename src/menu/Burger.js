import React from 'react';
import './Burger.css';

function Burger({ openMenu, setOpenMenu }) {

    return (
        <div className="burger" onClick={() => setOpenMenu(!openMenu)}>

            <div className={(openMenu)? 'burger__box boxActive' : 'burger__box'}>

                <span 
                    className={'burger__top ' + ((openMenu)? 'topActive' : '')}>
                </span>

                <span className='burger__mid'></span>

                <span 
                    className={(openMenu)? 'burger__bot botActive' : 'burger__bot'}>
                </span>
            </div>

        </div>
    )
}

export default Burger;
