import React from 'react';
import './accountMenu.css';
import AccountMenuButton from './accountMenuButton';
import AccountMenuWindow from './accountMenuWindow';

function AccountMenu() {

    return(
        <div className="account-menu">
            <AccountMenuButton/>
            <AccountMenuWindow/>
        </div>
    );
}

export default AccountMenu;