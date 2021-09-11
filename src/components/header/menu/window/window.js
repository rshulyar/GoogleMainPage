import React from 'react';
import Element from '../element';
import config from '../../../../config';
import styles from './window.module.css';

function Window({onClose}) {

    let config1 = config.menu1;
    let config2 = config.menu2;

    const divWindow = document.querySelector('.window');

    let config1Length = config1.length;
    let config2Length = config2.length;
    let reverseArrNum = config1.length - 1;

    const result = [];
    for (let i = 0; i < config1Length; i++) {
        result.push(<Element name={config1[i].name} link={config1[i].link} positionY={config1[i].position}/>)
        reverseArrNum--;
    }

    const result2 = [];
    for (let i = 0; i < config2Length; i++) {
        result2.push(<Element name={config2[i].name} link={config2[i].link} positionY={config2[i].position}/>)
        reverseArrNum--;
    }

    return (
        <div className={styles["close-window"]} onClick={onClose}>
            <div className={styles['menu-window']} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles["menu-part1"]}>
                    {result}
                </div>
                <hr className={styles["between-part-menu"]}></hr>
                <div className={styles["menu-part2"]}>
                    {result2}
                </div>
                <div className={styles["link-container"]}>
                    <a href={config.menuLink} className={styles["link"]}>Більше від Google</a>
                </div>
            </div>
        </div>
    )
}

export default Window;