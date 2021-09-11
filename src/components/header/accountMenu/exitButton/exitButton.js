import React from 'react';
import config from '../../../../config';
import styles from './exitButton.module.css';

function ExitButton() {
    return(
        <div className={styles["wrap"]}>
            <a href={config.signOutLink} className={styles["link"]}>Вийти</a>
        </div>
    );
}

export default ExitButton;