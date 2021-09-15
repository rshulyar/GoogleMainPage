import React, {useState} from 'react';
import styles from './search.module.css';
import dandruffImage from './../../../img/search.png';
import keyboardImage from './../../../img/keyboard.png';
import microphoneImage from './../../../img/microphone.png';

function Search({value, onChange}) {


    return (
        <div className={styles["wrap"]}>
            <img src={dandruffImage} className={styles["dandruff-image"]}/>
            <input 
                onChange={(e) => {
                    onChange(e.target.value);
                    console.log(value);
                }} 
                value={value} 
                form="search" 
                type="text" 
                className={styles["search-input"]}
            />
            <div className={styles["keyboard-and-microphone-images"]}>
                <img src={keyboardImage} className={styles["keyboard-image"]}/>
                <img src={microphoneImage} className={styles["microphone-image"]}/>
            </div>
        </div>
    );
}

export default Search;