import React from 'react';
import config from './../../../../config';
import './accountMenuWindowBottom.css';

function AccountMenuWindowBottom() {

    return(
        <div className="div-amwb">
            <a href={config.privacyPolicy} className="a1-amwb a-amwb">Політика конфіденційності</a>
            <a href={config.termsAndConditions} className="a2-amwb a-amwb">Загальні положення та умови</a>
        </div>
    );
}

export default AccountMenuWindowBottom;