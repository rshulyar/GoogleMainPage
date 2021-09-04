import React from 'react';
import GmailLink from './gmailLink';
import ImagesLink from './imagesLink';
import './header.css';

function Header() {
    return (
        <div className="upper">
            <div className="middle underUpper">
                <div className="lower underUpper">
                    <div className="link underUpper underLower">
                        <GmailLink/>
                        <ImagesLink/>
                    </div>
                    <div className="menuAndAccount underUpper underLower">
                        {/* todo: fill needed code */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;