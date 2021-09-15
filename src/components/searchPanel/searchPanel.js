import React, { useState } from 'react';
import styles from './searchPanel.module.css';
import Search from './search';
import Buttons from './buttons';

function SearchPanel() {

    const [queryString, setQueryString] = useState('');

    return (
        <div className={styles["wrap"]}>
            <div className={styles["inner"]}>
                <Search onChange={setQueryString} value={queryString}/>
                <Buttons queryString={queryString}/>
            </div>
        </div>
    );
}

export default SearchPanel;