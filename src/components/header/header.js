import React from 'react';
import GmailLink from './gmailLink';
import ImagesLink from './imagesLink';
import Menu from './menu';
import './header.css';
import AccountMenu from './accountMenu';

function Header() {
    return (
        <div className="upper">
            <div className="middle under-upper">
                <div className="lower under-upper">
                    <div className="link under-upper under-lower">
                        <GmailLink/>
                        <ImagesLink/>
                    </div>
                    <div className="menuAndAccount under-upper under-lower">
                        <Menu/>
                        <AccountMenu/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;