import React from 'react';
import './addAccount.css';
import config from '../../../../config';
import addAccountImg from './../../../../img/addAccount.png';


function AddAccount() {

    return(
        <div className="wrap-add">
            <a href={config.addAccountLink} className="link-add-account">
                <div className="container-image-add">
                    <img src={addAccountImg} className="image-add"></img>
                </div>
                <div className="container-text-add">Додати інший обліковий запис</div>
            </a>
        </div>
    );
}

export default AddAccount;