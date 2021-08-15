import { Container } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';

export const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={`${styles.mainContent} flexSpacebetween`}>
                    <div className={`${styles.bannerContent}`}>
                    </div>
                </div>
            </Container>
        </div>
    );
}