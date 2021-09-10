import React from 'react';
import menuButtonImg from './../../../../img/menuButton.png';
import './menuButton.css';

function MenuButton(props) {

    return (
        <div className="wrap-menu-button" onClick={props.click}>
            <a className="link-menu-button">
                <img src={menuButtonImg} className="image-menu-button" ></img>
            </a>
            <span className="hint-menu-button">Додатки Google</span>
        </div>
    )
}

export default MenuButton;