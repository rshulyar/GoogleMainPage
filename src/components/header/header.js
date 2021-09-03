import React from 'react';
import GmailLink from './gmailLink';
import './header.css';

function Header() {
    return (
        <div className="upperHeader">
            <div className="middleHeader">
                <div className="lowerHeader">
                    <div className="linkHeader">
                    <GmailLink/>
                    </div>
                    <div className="menuAndAccountHeader">
                        {/* todo: fill needed code */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;