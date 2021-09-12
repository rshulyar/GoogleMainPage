import React from 'react';
import logo from './../../img/logo.png';
import styles from './logo.module.css';

function Logo() {
    return(
        <div className={styles["wrap"]}>
            <div className={styles["inner"]}>
                <img className={styles["image"]} src={logo}></img>
            </div>
        </div>
    )
}

export default Logo;