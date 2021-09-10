import React from 'react';
import Footer from '../footer';
import ExitButton from '../exitButton';
import AccountDetails from '../accountDetails';
import AddAccount from '../addAccount';
import './window.css';

function Window({onClose}) {

    return (
        <div className="close-account-window-container" onClick={onClose}>
            <div className="account-menu-window" onClick={(e)=>{e.stopPropagation()}}>
                <AccountDetails/>
                <AddAccount/>
                <ExitButton/>
                <Footer/>
            </div>
        </div>
    );
}

export default Window;