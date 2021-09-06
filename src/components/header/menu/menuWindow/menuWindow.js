import React from 'react';
import MenuWindowElement from './../menuWindowElement';
import config from './../../../../config';
import './menuWindow.css';

function MenuWindow() {

    let config1 = config.menu1;
    let config2 = config.menu2;

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
    let config2Length = config2.length;
    let reverseArrNum = config1.length - 1;

    const result = [];
    for (let i = 0; i < config1Length; i++) {
        result.push(<MenuWindowElement name={config.menu1[i][0]} link={config.menu1[i][1]} positionY={config.menu1[i][2]}/>)
        reverseArrNum--;
    }

    const result2 = [];
    for (let i = 0; i < config2Length; i++) {
        result2.push(<MenuWindowElement name={config.menu2[i][0]} link={config.menu2[i][1]} positionY={config.menu2[i][2]}/>)
        reverseArrNum--;
    }

    return (
        <div className='menuWindow'>
            <div className="menuParth1">
                {result}
            </div>
            <hr className="betweenParthMenu"></hr>
            <div className="menuParth2">
                {result2}
            </div>
            <div className="divLinkInTheEndMenu">
                <a href={config.menuLink} className="linkInTheEndMenu">Більше від Google</a>
            </div>
        </div>
    )
}

export default MenuWindow;