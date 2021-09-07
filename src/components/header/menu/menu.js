import React, {Component, useState} from 'react';
import MenuButton from './menuButton';
import MenuWindow from './menuWindow';
import './menu.css';

const Menu = () => {
    const [open, setOpen] = useState(false);

    function cOut () {
        setOpen(!open);
    }

    return (
        <div className="upper-menu menu">
            <div className="lower-menu menu">
                <MenuButton click={cOut}/>
                {open && <MenuWindow onClose={() => setOpen(false)}/>}
            </div>
        </div>
    )
}

export default Menu;