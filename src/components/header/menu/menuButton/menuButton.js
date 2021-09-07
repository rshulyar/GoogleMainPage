import React from 'react';
import menuButtonImg from './menuButton.png';
import './menuButton.css';

function MenuButton(props) {

    return (
        <div className="divMenuButton" onClick={props.click}>
            <a href="#" className="aMenuButton"><img src={menuButtonImg} className="imgMenuButton" ></img></a>
        </div>
    )
}

export default MenuButton;