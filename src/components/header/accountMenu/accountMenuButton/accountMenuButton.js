import React from 'react';
import './accountMenuButton.css';
import accountButtonImg from './../../../../img/accountButton.png';

function AccountMenuButton(props) {
    
    return (
        <div className="upper-account-menu-button account-menu-button" onClick={props.click}>
            <div className="lower-account-menu-button account-menu-button">
                <a className="a-account-menu-button">
                    <img src={accountButtonImg} className="img-account-menu-button"></img>
                </a>
            </div>
            <span className="account-menu-button-hint">
                <div>Обліковий запис Google</div> 
                <div>Roman Shulyar</div>
                <div>roman.shulyar.dev@gmail.com</div>
            </span>
        </div>
    );
}

export default AccountMenuButton;