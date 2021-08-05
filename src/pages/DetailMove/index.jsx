import { Container } from '@material-ui/core';
import React from 'react';
import styles from './DetailMove.module.scss';

export const DetailMovie = () => {
    return (
        <Container className={styles.wrapper}>
            <div className="title">
                 Avengers : Infinity War 
            </div>
        </Container>
    );
}
