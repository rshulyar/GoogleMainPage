import React from 'react';
import styles from './searchPanel.module.css';
import Search from './search';
import Buttons from './buttons';

function SearchPanel() {

    return (
        <div className={styles["wrap"]}>
            <form action={`https://www.google.com/search?q=${'#'}`} method="get" id="search" className={styles["form"]}>
                <Search/>
                <Buttons/>
            </form>
        </div>
    );
}

export default SearchPanel;