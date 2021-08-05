import { Container } from '@material-ui/core';
import React from 'react';
import styles from './DetailMove.module.scss';

export const DetailMovie = () => {
    return (
        <Container className={styles.wrapper}>
            <div className={styles.title}>
                 Avengers : Infinity War 
            </div>
            <div className={styles.movie}>
                <img src="images/videoDetail.png" alt="" />
            </div>

            <div className={styles.detailContent}>
                <div className={styles.logoDetail}>
                    <img src="images/logoDetail.png" alt="" />
                    <div className={styles.midDetail}>
                        <p>Avengers : Infinity War</p>
                        <p>Lượt xem: 1.123.234 lượt xem</p>
                        <p>2020 | Mỹ | 1 Tập</p>
                    </div>
                    <div className={styles.footerDetail}>
                        Avengers: Infinity War là một bộ phim siêu anh hùng dựa trên bộ truyện tranh cùng tên. Nó là phần tiếp theo của The Avengers và Avengers: Age of Ultron và sự giao nhau giữa phần tiếp theo của Captain America: Civil War, phim Doctor Strange, Guardians of the Galaxy Vol. 2, Spider-Man: Homecoming, Thor: Ragnarok và Black Panther. Bộ phim là phần thứ 19 trong vũ trụ Marvel Cinematic Universe cũng như phần thứ bảy trong Phase Three. Bộ phim được phát hành vào ngày 27 tháng 4 năm 2018.
                    </div>
                </div>
            </div>
        </Container>
    );
}
