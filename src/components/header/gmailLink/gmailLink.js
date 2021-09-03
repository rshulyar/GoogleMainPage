import React from 'react';
import './gmailLink.css';
import config from './../../../config';

function GmailLink() {

    return (
        <a href={config.gmailLink}>Gmail</a>
    )
}

export default GmailLink;