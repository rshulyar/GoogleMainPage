import React from 'react';
import styles from './gmailLink.module.css';
import './../linkStyles.css';
import config from './../../../config';

function GmailLink() {

    return (
        <a className={`${styles["gmail-link"]} common-link`} href={config.gmailLink}>Gmail</a>
    )
}

export default GmailLink;