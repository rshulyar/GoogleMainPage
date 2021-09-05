import React, {Component} from 'react';
import MenuButton from './menuButton';
import MenuWindow from './menuWindow';
import './menu.css';

const Menu = ()=> {

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