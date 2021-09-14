import React from 'react';
import styles from './buttons.module.css';

function Buttons() {

    return (
        <div className={styles["wrap"]}>
            <input className={`${styles["button"]} ${styles["search-google"]}`} type="submit" value="Пошук Google"/>
            <input className={`${styles["button"]} ${styles["luky-me"]}`} type="submit" value="Мені пощастить"/>
        </div>
    );
}

export default Buttons;