import React from 'react';
import './gmailLink.css';
import './../linkStyles.css';
import config from './../../../config';

function GmailLink() {

    return (
        <a className="gmail-link common-link" href={config.gmailLink}>Gmail</a>
    )
}

export default GmailLink;