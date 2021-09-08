import React, {Component, useState} from 'react';
import MenuButton from './menuButton';
import MenuWindow from './menuWindow';
import './menu.css';

const Menu = () => {
    const [toggleOpen, setToggleOpen] = useState(false);

    function onClick () {
        setToggleOpen(!toggleOpen);
    }

    return (
        <div className="upper-menu menu">
            <div className="lower-menu menu">
                <MenuButton click={onClick}/>
                {toggleOpen && <MenuWindow onClose={() => setToggleOpen(false)}/>}
            </div>
        </div>
    )
}

export default Menu;