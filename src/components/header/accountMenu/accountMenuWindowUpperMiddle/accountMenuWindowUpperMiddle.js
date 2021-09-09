import React from 'react';
import './accountMenuWindowUpperMiddle.css';
import config from './../../../../config';
import addAccountImg from './../../../../img/addAccount.png';


function AccountMenuWindowUpperMiddle() {

    return(
        <div className="div1-amwum">
            <a href={config.addAccountLink} className="a-amwum">
                <div className="div-img-amwum">
                    <img src={addAccountImg} className="img-amwum"></img>
                </div>
                <div className="div2-amwum">Додати інший обліковий запис</div>
            </a>
        </div>
    );
}

export default AccountMenuWindowUpperMiddle;