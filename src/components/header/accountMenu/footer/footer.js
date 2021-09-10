import React from 'react';
import config from '../../../../config';
import './footer.css';

function Footer() {

    return(
        <div className="wrap-footer-account">
            <a href={config.privacyPolicy} className="privacy-policy-link links-footer-account">Політика конфіденційності</a>
            <a href={config.termsAndConditions} className="terms-and-conditions-link links-footer-account">Загальні положення та умови</a>
        </div>
    );
}

export default Footer;