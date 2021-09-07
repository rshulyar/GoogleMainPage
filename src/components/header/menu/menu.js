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
        <div className="upperMenu">
            <div className="lowerMenu">
                <MenuButton click={cOut}/>
                {open && <MenuWindow onClose={() => setOpen(false)}/>}
            </div>
        </div>
    )
}

export default Menu;