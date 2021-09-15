import React, {useState} from 'react';
import styles from './search.module.css';
import dandruffImage from './../../../img/search.png';
import keyboardImage from './../../../img/keyboard.png';
import microphoneImage from './../../../img/microphone.png';

function Search() {

    let [value, setValue] = useState('');

    return (
        <div className={styles["wrap"]}>
            <img src={dandruffImage} className={styles["dandruff-image"]}/>
            <input onChange={(e) => setValue(e.target.value)} value={value} form="search" type="text" className={styles["search-input"]}/>
            <div className={styles["keyboard-and-microphone-images"]}>
                <img src={keyboardImage} className={styles["keyboard-image"]}/>
                <img src={microphoneImage} className={styles["microphone-image"]}/>
            </div>
        </div>
    );
}

export default Search;