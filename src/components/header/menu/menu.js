import React, {Component, useState} from 'react';
import MenuButton from './menuButton';
import MenuWindow from './menuWindow';
import './menu.css';

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    function onClick () {
        setToggleMenu(!toggleMenu);
    }

    return (
        <div className="wrap-menu menu">
            <div className="inner-menu menu">
                <MenuButton click={onClick}/>
                {toggleMenu && <MenuWindow onClose={() => setToggleMenu(false)}/>}
            </div>
        </div>
    )
}

export default Menu;