import React from 'react';
import styles from './imagesLink.module.css';
import './../linkStyles.css';
import config from './../../../config';

function ImagesLink() {

    return (
        <a className={`${styles["images-link"]} common-link`} href={config.imagesLink}>Зображення</a>
    )
}

export default ImagesLink;