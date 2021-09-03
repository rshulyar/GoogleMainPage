import React from 'react';
import './imagesLink.css';
import config from './../../../config';

function ImagesLink() {

    return (
        <a className="imagesLinkClass" href={config.imagesLink}>Зображення</a>
    )
}

export default ImagesLink;