import React from 'react';
import './gmailLink.css';
import './../linkStyles.css';
import config from './../../../config';

function GmailLink() {

    return (
        <a className="gmailLinkClass linkClass" href={config.gmailLink}>Gmail</a>
    )
}

export default GmailLink;