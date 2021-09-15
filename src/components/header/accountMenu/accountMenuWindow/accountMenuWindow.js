import React from 'react';
import AccountMenuWindowBottom from '../accountMenuWindowBottom';
import AccountMenuWindowLowerMiddle from '../accountMenuWindowLowerMiddle';
import AccountMenuWindowTop from '../accountMenuWindowTop';
import AccountMenuWindowUpperMiddle from '../accountMenuWindowUpperMiddle';
import './accountMenuWindow.css';

function AccountMenuWindow() {

    return (
        <div className="close-account-menu-window">
            <div className="account-menu-window">
                <AccountMenuWindowTop/> {/* pick a color */}
                <AccountMenuWindowUpperMiddle/> {/* pick a color, create image */}
                <AccountMenuWindowLowerMiddle/> {/* pick a color */}
                <AccountMenuWindowBottom/> {/* pick a color */}
            </div>
        </div>
    );
}

export default AccountMenuWindow;