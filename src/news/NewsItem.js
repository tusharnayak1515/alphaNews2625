import React from 'react';

import not_found from './no_pic.webp';

import styles from './newsItem.module.css';

const NewsItem = ({title, description, imageUrl, newsUrl}) => {
    return (
            <div className={styles.card}>
                <img src={imageUrl===null? not_found : imageUrl} alt="" />
                <div className={styles.card_body}>
                    <h4>{title}...</h4>
                    <p>{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank">Read More</a>
                </div>
            </div>
    )
}

export default NewsItem
