import React from 'react';
import './menuWindowElement.css';

function MenuWindowElement(props) {
    return (
        <div className="wrap-menu-window-element">
            <a href={props.link} className="link-menu-window-element">
                <div className="image-container-menu-window-element">
                    <span className="image-menu-window-element" style={{backgroundPositionY: props.positionY}}></span>
                </div>
                <span className="text-menu-window-element">{props.name}</span>
            </a>
        </div>
    )
}

export default MenuWindowElement;