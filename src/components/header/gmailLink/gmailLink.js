import React from 'react';
import './gmailLink.css';
import {gmailLink} from './../../../config.js';

function GmailLink() {

    return (
        <a href={gmailLink}>Gmail</a>
    )
}

export default GmailLink;