import React from 'react';
import MenuWindowElement from './../menuWindowElement';
import config from './../../../../config';
import './menuWindow.css';

function MenuWindow() {

    let config1 = config.menu1;

    const divMenuWindow = document.querySelector('.menuWindow');

    // function spawnMenuWindowElements() {
    //     let config1Length = config1.length;
    //     let reverseArrNum = config1.length - 1;

    //     for (let i = 0; i < config1Length; i++) {
    //         divMenuWindow.insertAdjacentHTML('afterbegin', <MenuWindowElement/>);
    //         reverseArrNum--;
    //     }
    // }

    //spawnMenuWindowElements();

    let config1Length = config1.length;
    let reverseArrNum = config1.length - 1;

    const result = [];
    for (let i = 0; i < config1Length; i++) {
        result.push(<MenuWindowElement/>)
        reverseArrNum--;
    }
    return (
        <div className='menuWindow'>
            {
        result
        }
        </div>
    )
}

export default MenuWindow;