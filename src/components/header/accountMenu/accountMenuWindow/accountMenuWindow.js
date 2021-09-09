import React from 'react';
import AccountMenuWindowBottom from '../accountMenuWindowBottom';
import AccountMenuWindowLowerMiddle from '../accountMenuWindowLowerMiddle';
import AccountMenuWindowTop from '../accountMenuWindowTop';
import AccountMenuWindowUpperMiddle from '../accountMenuWindowUpperMiddle';
import './accountMenuWindow.css';

function AccountMenuWindow({onClose}) {

    return (
        <div className="close-account-menu-window" onClick={onClose}>
            <div className="account-menu-window" onClick={(e)=>{e.stopPropagation()}}>
                <AccountMenuWindowTop/>
                <AccountMenuWindowUpperMiddle/>
                <AccountMenuWindowLowerMiddle/>
                <AccountMenuWindowBottom/>
            </div>
        </div>
    );
}

export default AccountMenuWindow;