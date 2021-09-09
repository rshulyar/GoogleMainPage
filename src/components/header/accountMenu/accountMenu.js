import React, {useState} from 'react';
import './accountMenu.css';
import AccountMenuButton from './accountMenuButton';
import AccountMenuWindow from './accountMenuWindow';

function AccountMenu() {
    const [toggleOpen, setToggleOpen] = useState(false);

    function onClick () {
        setToggleOpen(!toggleOpen);
    }

    return(
        <div className="account-menu">
            <AccountMenuButton click={onClick}/>
            {toggleOpen && <AccountMenuWindow onClose={() => setToggleOpen(false)}/>}
        </div>
    );
}

export default AccountMenu;