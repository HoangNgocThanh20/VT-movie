import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PopularItem.module.scss';

export const PopularItem = ({
    image='',
    header='',
    title='',
    item
}) => {
    return (
        <div className={styles.wrapper}>
            <a href={`/xem-phim/${item.id}`} target="_blank" rel="noreferrer">  
                <img src={`${image}`} alt="sieu anh hung" />
                <h5>{header}</h5>
                <p>{title}</p>
            </a>
        </div>
    );
}
