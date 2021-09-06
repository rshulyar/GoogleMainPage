import React from 'react';
import config from './../../../../config';
import './menuWindowElement.css';

function MenuWindowElement(props) {
    return (
        <div className="div1MenuWindowElement">
            <a href={props.link} className="aMenuWindowElement">
                <div className="div2MenuWindowElement">
                    <span className="span1MenuWindowElement" style={{backgroundPositionY:props.positionY}}></span>
                </div>
                <span className="span2MenuWindowElement">{props.name}</span>
            </a>
        </div>
    )
}

export default MenuWindowElement;