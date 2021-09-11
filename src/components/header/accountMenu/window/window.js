import React from 'react';
import Footer from '../footer';
import ExitButton from '../exitButton';
import AccountDetails from '../accountDetails';
import AddAccount from '../addAccount';
import styles from './window.module.css';

function Window({onClose}) {

    return (
        <div className={styles["close-window"]} onClick={onClose}>
            <div className={styles["window"]} onClick={(e)=>{e.stopPropagation()}}>
                <AccountDetails/>
                <AddAccount/>
                <ExitButton/>
                <Footer/>
            </div>
        </div>
    );
}

export default Window;