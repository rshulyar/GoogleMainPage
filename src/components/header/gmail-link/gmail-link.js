import React from 'react';
import './gmail-link.css';

function GmailLink() {

    let link = "https://mail.google.com/mail/&ogbl";

    return (
        <a href={link}>Gmail</a>
    )
}

export default GmailLink;