import React, {Component, useState} from 'react';
import Button from './button';
import Window from './window';
import styles from './menu.module.css';

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    function onClick () {
        setToggleMenu(!toggleMenu);
    }

    return (
        <div className={`${styles["wrap"]} ${styles["menu"]}`}>
            <div className={`${styles["inner"]} ${styles["menu"]}`}>
                <Button click={onClick}/>
                {toggleMenu && <Window onClose={() => setToggleMenu(false)}/>}
            </div>
        </div>
    )
}

export default Menu;