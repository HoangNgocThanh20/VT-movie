import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PopularItem.module.scss';

export const PopularItem = ({
    image='',
    header='',
    title=''
}) => {
    return (
        <div className={styles.wrapper}>
            <Link to="/detailMovie">  
                <img src={`${image}`} alt="sieu anh hung" />
                <h5>{header}</h5>
                <p>{title}</p>
            </Link>
        </div>
    );
}
