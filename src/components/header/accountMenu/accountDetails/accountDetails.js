import React from 'react';
import config from '../../../../config';
import './accountDetails.css';
import WindowImage from './../../../../img/accountMenuWindowImage.png';

function AccountDetails() {

    return (
        <div className="wrap">
            <div className="container-image">
                <img className="image" src={WindowImage}></img>
            </div>
            <div className="container-link">
                <div className="container-name">Roman Shulyar</div>
                <div className="container-mail">roman.shulyar.dev@gmail.com</div>
                <a href={config.accountPageLink} className="link-account">Ваш обліковий запис Google</a>
            </div>
        </div>
    );
}

export default AccountDetails;