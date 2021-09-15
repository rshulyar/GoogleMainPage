import React from 'react';
import config from './../../config';
import styles from './swapLanguage.module.css';

function SwapLanguage() {

    return(
        <div className={styles["wrap"]}>
            <div className={styles["inner"]}>
                <span className={styles["text"]}>Мова Google:  </span>
                <a href={config.swapLanguage} className={styles["link"]}>русский</a>
            </div>
        </div>
    );
}

export default SwapLanguage;