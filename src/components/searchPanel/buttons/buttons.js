import React from 'react';
import styles from './buttons.module.css';

const prefix = 'https://google.com/search?q=';

function Buttons({queryString}) {

    return (
        <div className={styles["wrap"]}>
            <button 
                className={`${styles["button"]} ${styles["search-google"]}`}
                onClick={() => {window.location.href = `${prefix}${queryString}`}}
            >
                Пошук Google
            </button>
            <input className={`${styles["button"]} ${styles["luky-me"]}`} type="button" value="Мені пощастить"/>
        </div>
    );
}

export default Buttons;