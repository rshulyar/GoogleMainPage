import React from 'react';
import GmailLink from './gmail-link';
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;