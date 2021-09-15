import React from 'react';
import config from './../../../../config';
import './accountMenuWindowLowerMiddle.css';

function AccountMenuWindowLowerMiddle() {
    return(
        <div className="div-amwlm">
            <a href={config.signOutLink} className="a-amwlm">Вийти</a>
        </div>
    );
}

export default AccountMenuWindowLowerMiddle;