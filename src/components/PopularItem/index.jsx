import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { slug } from 'src/ulti/slug';
import styles from './PopularItem.module.scss';

export const PopularItem = ({
    image='',
    header='',
    title='',
    item
}) => {
    return (
        <div className={styles.wrapper}>
            <Link to={`/detailMovie/${item.id}`}>  
                <img src={`${image}`} alt="sieu anh hung" />
                <h5>{header}</h5>
                <p>{title}</p>
            </Link>
        </div>
    );
}
