import React from 'react';
import config from './../../../../config';
import './accountMenuWindowTop.css';
import AccountMenuWindowImage from './../../../../img/accountMenuWindowImage.png';

function AccountMenuWindowTop() {

    return (
        <div className="account-menu-window-top">
            <div className="div-image-account-in-account-menu-window-top">
                <img className="image-account-in-account-menu-window-top" src={AccountMenuWindowImage}></img>
            </div>
            <div className="lower-part-account-menu-window-top">
                <div className="name-in-account-menu-window-top">Roman Shulyar</div>
                <div className="mail-in-account-menu-window-top">roman.shulyar.dev@gmail.com</div>
                <a href={config.accountPageLink} className="a-in-account-menu-window-top">Ваш обліковий запис Google</a>
            </div>
        </div>
    );
}

export default AccountMenuWindowTop;