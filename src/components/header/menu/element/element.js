import React from 'react';
import styles from './element.module.css';

function Element(props) {
    return (
        <div className={styles["wrap"]}>
            <a href={props.link} className={styles["link"]}>
                <div className={styles["image-container"]}>
                    <span className={styles["image"]} style={{backgroundPositionY: props.positionY}}></span>
                </div>
                <span className={styles["text"]}>{props.name}</span>
            </a>
        </div>
    )
}

export default Element;