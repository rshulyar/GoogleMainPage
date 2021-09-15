import React from 'react';
import styles from './addAccount.module.css';
import config from '../../../../config';
import addAccountImg from './../../../../img/addAccount.png';


function AddAccount() {

    return(
        <div className={styles["wrap"]}>
            <a href={config.addAccountLink} className={styles["link"]}>
                <div className={styles["image-container"]}>
                    <img src={addAccountImg} className={styles["image"]}></img>
                </div>
                <div className={styles["text-container"]}>Додати інший обліковий запис</div>
            </a>
        </div>
    );
}

export default AddAccount;