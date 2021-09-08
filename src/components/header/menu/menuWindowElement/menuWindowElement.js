import React from 'react';
import './menuWindowElement.css';

function MenuWindowElement(props) {
    return (
        <div className="div1-menu-window-element">
            <a href={props.link} className="a-menu-window-element">
                <div className="div2-menu-window-element">
                    <span className="span1-menu-window-element" style={{backgroundPositionY: props.positionY}}></span>
                </div>
                <span className="span2-menu-window-element">{props.name}</span>
            </a>
        </div>
    )
}

export default MenuWindowElement;