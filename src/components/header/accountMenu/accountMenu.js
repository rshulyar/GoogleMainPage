import React, {useState} from 'react';
import './accountMenu.css';
import Button from './button';
import Window from './window';

function AccountMenu() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function onClick () {
        setToggleMenu(!toggleMenu);
    }

    return(
        <div className="container">
            <Button click={onClick}/>
            {toggleMenu && <Window onClose={() => setToggleMenu(false)}/>}
        </div>
    );
}

export default AccountMenu;