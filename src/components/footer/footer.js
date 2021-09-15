import React from 'react';
import styles from './footer.module.css';
import config from './../../config';

function Footer() {

    return(
        <div className={styles["wrap"]}>
            <div className={styles["country"]}>Україна</div>
            <div className={styles["links-container"]}>
                <div className={styles["left-links"]}>
                    <a href={config.footer.aboutGoogle} className={`${styles["link"]}`}>Про Google</a>
                    <a href={config.footer.advertising} className={`${styles["link"]}`}>Реклама</a>
                    <a href={config.footer.forBusiness} className={`${styles["link"]}`}>Для бізнесу</a>
                    <a href={config.footer.howWorkSearch} className={`${styles["link"]}`}>Як працює Пошук</a>
                </div>
                <div className={styles["right-links"]}>
                    <a href={config.footer.confidentiality} className={`${styles["link"]}`}>Конфіденційність</a>
                    <a href={config.footer.conditions} className={`${styles["link"]}`}>Умови</a>
                    <input className={`${styles["link"]} ${styles["button"]}`} type="button" value="Налаштування"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;