import React from 'react';
import './button.css';
import accountButtonImg from './../../../../img/accountButton.png';

function Button(props) {
    
    return (
        <div className="wrap-account-button container-account-button" onClick={props.click}>
            <div className="inner-account-button container-account-button">
                <a className="link-account-button">
                    <img src={accountButtonImg} className="image-account-button"></img>
                </a>
            </div>
            <span className="account-button-hint">
                <div>Обліковий запис Google</div> 
                <div>Roman Shulyar</div>
                <div>roman.shulyar.dev@gmail.com</div>
            </span>
        </div>
    );
}

export default Button;