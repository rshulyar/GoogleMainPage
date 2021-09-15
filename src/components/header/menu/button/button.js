import React from 'react';
import buttonImg from './../../../../img/menuButton.png';
import styles from './button.module.css';

function Button(props) {

    return (
        <div className={styles["wrap"]} onClick={props.click}>
            <a className={styles["link"]}>
                <img src={buttonImg} className={styles["image"]} ></img>
            </a>
            <span className={styles["hint"]}>Додатки Google</span>
        </div>
    )
}

export default Button;