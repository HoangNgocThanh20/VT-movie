import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={`${styles.wrapper} fontPoppin`}>
            <Container>
                <Grid container>
                    <div className={styles.header}>
                        <div className={styles.logoHeader}>
                            <Link to="/home">VT MOVIE</Link>
                        </div>
                        
                        <div className={styles.search}>
                            <input type="text" placeholder="Tìm:tên phim, đạo diễn , diễn viên" />
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <ul className={`${styles.listPage}`}>
                            <li>
                                <Link to="/home">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/category">Thể Loại</Link>
                            </li>
                            <li>
                                <Link to="/country">Quốc gia</Link>
                            </li>
                            <li>
                                <Link to="/oddMovie">Phim lẻ</Link>
                            </li>
                            <li>
                                <Link to="/seriesMovie">Phim Bộ</Link>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Container>
        </div>
    );
}