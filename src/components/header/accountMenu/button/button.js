import React from 'react';
import styles from './button.module.css';
import accountButtonImg from './../../../../img/accountButton.png';

function Button(props) {
    
    return (
        <div className={`${styles["wrap"]} ${styles["container"]}`} onClick={props.click}>
            <div className={`${styles["inner"]} ${styles["container"]}`}>
                <a className={styles["link"]}>
                    <img src={accountButtonImg} className={styles["image"]}></img>
                </a>
            </div>
            <span className={styles["hint"]}>
                <div>Обліковий запис Google</div> 
                <div>Roman Shulyar</div>
                <div>roman.shulyar.dev@gmail.com</div>
            </span>
        </div>
    );
}

export default Button;