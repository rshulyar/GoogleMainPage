import React from 'react';
import MenuWindowElement from './../menuWindowElement';
import config from './../../../../config';
import './menuWindow.css';

function MenuWindow({onClose}) {

    let config1 = config.menu1;
    let config2 = config.menu2;

    const divMenuWindow = document.querySelector('.menuWindow');

    let config1Length = config1.length;
    let config2Length = config2.length;
    let reverseArrNum = config1.length - 1;

    const result = [];
    for (let i = 0; i < config1Length; i++) {
        result.push(<MenuWindowElement name={config1[i].name} link={config1[i].link} positionY={config1[i].position}/>)
        reverseArrNum--;
    }

    const result2 = [];
    for (let i = 0; i < config2Length; i++) {
        result2.push(<MenuWindowElement name={config2[i].name} link={config2[i].link} positionY={config2[i].position}/>)
        reverseArrNum--;
    }

    return (
        <div className="close-menu-window" onClick={onClose}>
            <div className='menu-window' onClick={(e)=>{e.stopPropagation()}}>
                <div className="menu-part1">
                    {result}
                </div>
                <hr className="between-part-menu"></hr>
                <div className="menu-part2">
                    {result2}
                </div>
                <div className="div-link-in-the-end-menu">
                    <a href={config.menuLink} className="link-in-the-end-menu">Більше від Google</a>
                </div>
            </div>
        </div>
    )
}

export default MenuWindow;