import React from 'react';
import config from '../../../../config';
import './exitButton.css';

function ExitButton() {
    return(
        <div className="wrap-exit">
            <a href={config.signOutLink} className="link-exit">Вийти</a>
        </div>
    );
}

export default ExitButton;