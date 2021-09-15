import React, {useState} from 'react';
import styles from './accountMenu.module.css';
import Button from './button';
import Window from './window';

function AccountMenu() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function onClick () {
        setToggleMenu(!toggleMenu);
    }

    return(
        <div className={styles['container']}>
            <Button click={onClick}/>
            {toggleMenu && <Window onClose={() => setToggleMenu(false)}/>}
        </div>
    );
}

export default AccountMenu;