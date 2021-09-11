import React from 'react';
import config from '../../../../config';
import styles from './accountDetails.module.css';
import WindowImage from './../../../../img/accountMenuWindowImage.png';

function AccountDetails() {

    return (
        <div className={styles['wrap']}>
            <div className={styles['container-image']}>
                <img className={styles['image']} src={WindowImage}></img>
            </div>
            <div className={styles['container-link']}>
                <div className={styles['container-name']}>Roman Shulyar</div>
                <div className={styles['container-mail']}>roman.shulyar.dev@gmail.com</div>
                <a href={config.accountPageLink} className={styles['link-account']}>Ваш обліковий запис Google</a>
            </div>
        </div>
    );
}

export default AccountDetails;