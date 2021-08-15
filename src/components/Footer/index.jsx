import { Container } from '@material-ui/core';
import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.ortherPage}>
                <span>Fullphim.net</span>
                <span>phimmoi.net</span>
                <span>banhtv</span>
                <span>phim bất hủ</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
                <span>Fullphim.net</span>
            </div>
            <Container className={styles.wrapper}>
                <img src="/images/vtmovie.png" alt="logo" />
                <p>
                    Copyright ® 2021 VT Movie ver 1.0 All Rights Reserved.
                    VT Movie - xem phim hay chất lượng full hd
                    Liên hệ: Viethoangquoc2312@gmail.com
                    <br />sitemap | contact
                </p>
                
            </Container>
        </div>
    );
}