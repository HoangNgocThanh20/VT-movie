import { Container, Grid } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';

export const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={`${styles.mainContent} flexSpacebetween`}>
                    <img src="images/posterImage.png" alt="bannerImage" />
                    <div className={`${styles.bannerContent}`}>
                        <h3>Movie Poster</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus facilisis ullamcorper egestas diam egestas sed placerat diam commodo. Amet et nisl a nam eget vitae. Integer ac id sed vulputate nunc amet. Nulla tincidunt sit odio amet porttitor. At auctor</p>
                        <div className={styles.btn}>
                            <img src="images/circlePlay.png" alt=""/>
                            <p>Xem phim</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}