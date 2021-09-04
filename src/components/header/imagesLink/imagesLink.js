import React from 'react';
import './imagesLink.css';
import './../linkStyles.css';
import config from './../../../config';

function ImagesLink() {

    return (
        <a className="imagesLinkClass linkClass" href={config.imagesLink}>Зображення</a>
    )
}

export default ImagesLink;