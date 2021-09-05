import React from 'react';
import MenuButton from './menuButton';
import MenuWindow from './menuWindow';
import './menu.css';

function Menu () {
    return (
        <div className="upperMenu">
            <div className="lowerMenu">
                <MenuButton/>
                <MenuWindow/>
            </div>
        </div>
    )
}

export default Menu;