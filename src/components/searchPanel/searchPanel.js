import React from 'react';
import styles from './searchPanel.module.css';
import Search from './search';
import Buttons from './buttons';

function SearchPanel() {

    return (
        <div className={styles["wrap"]}>
            <form className={styles["form"]}>
                <Search/>
                <Buttons/>
            </form>
        </div>
    );
}

export default SearchPanel;