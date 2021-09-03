import React from 'react';
import './gmailLink.css';
import config from './../../../config';

function GmailLink() {

    return (
        <a className="gmailLinkClass" href={config.gmailLink}>Gmail</a>
    )
}

export default GmailLink;