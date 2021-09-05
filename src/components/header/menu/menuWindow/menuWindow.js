import React from 'react';
import MenuWindowElement from './../menuWindowElement';
import config from './../../../../config';
import './menuWindow.css';

function MenuWindow() {
    return (
        <div className='menuWindow'>
            <MenuWindowElement/>
            <MenuWindowElement/>
            <MenuWindowElement/>
            <MenuWindowElement/>
            <MenuWindowElement/>
        </div>
    )
}

export default MenuWindow;