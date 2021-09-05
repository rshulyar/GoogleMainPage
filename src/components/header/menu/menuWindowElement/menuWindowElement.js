import React from 'react';
import config from './../../../../config';
import './menuWindowElement.css';

function menuWindowElement() {
    return (
        <div className="div1MenuWindowElement">
            <a href={config.menu1[0][1]} className="aMenuWindowElement">
                <div className="div2MenuWindowElement">
                    <span className="span1MenuWindowElement"></span>
                </div>
                <span className="span2MenuWindowElement">{config.menu1[0][0]}</span>
            </a>
        </div>
    )
}

export default menuWindowElement;