import React from 'react';
import config from '../../../../config';
import styles from './footer.module.css';

function Footer() {

    return(
        <div className={styles["wrap"]}>
            <a href={config.privacyPolicy} className={`${styles["privacy-policy-link"]} ${styles["link"]}`}>Політика конфіденційності</a>
            <a href={config.termsAndConditions} className={`${styles["terms-and-conditions-link"]} ${styles["link"]}`}>Загальні положення та умови</a>
        </div>
    );
}

export default Footer;