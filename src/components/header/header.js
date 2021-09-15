import React from 'react';
import GmailLink from './gmailLink';
import ImagesLink from './imagesLink';
import Menu from './menu';
import styles from './header.module.css';
import AccountMenu from './accountMenu';

function Header() {
    return (
        <div className={styles["upper"]}>
            <div className={`${styles["middle"]} ${styles["under-upper"]}`}>
                <div className={`${styles["lower"]} ${["under-upper"]}`}>
                    <div className={`${styles["link"]} ${styles["under-upper"]} ${styles["under-lower"]}`}>
                        <GmailLink/>
                        <ImagesLink/>
                    </div>
                    <div className={`${styles["menu-container"]} ${styles["under-upper"]} ${styles["under-lower"]}`}>
                        <Menu/>
                        <AccountMenu/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;