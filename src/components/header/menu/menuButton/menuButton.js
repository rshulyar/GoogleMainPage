import React from 'react';
import menuButtonImg from './../../../../img/menuButton.png';
import './menuButton.css';

function MenuButton(props) {

    return (
        <div className="div-menu-button" onClick={props.click}>
            <a /* href="#" */ className="a-menu-button">
                <img src={menuButtonImg} className="img-menu-button" ></img>
            </a>
        </div>
    )
}

export default MenuButton;