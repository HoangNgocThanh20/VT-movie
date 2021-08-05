import { Container, Grid } from '@material-ui/core';
import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.main}> 
            <Container className={styles.wrapper}>
                <div className={styles.footerFlex}>
                    <div className={styles.flexLeft}>
                        <h3>VT Movie</h3>
                        <div className={styles.image}>
                            <img src="images/footer1.png" alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src="images/footer2.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.flexMid}>
                        <p>Quy định</p>
                        <p>Điều khoản sử dụng</p>
                        <p>Chính sách Và Quy định chung</p>
                        <p>Chính sách về Quyền riêng tư</p>
                        <p>Chính  sách về Sở hữu trí tuệ</p>
                    </div>
                    <div className={styles.flexRight}>
                        <p>Trợ Giúp</p>
                        <p>FAQs</p>
                        <p>Liên hệ</p>
                        <p>Góp ý</p>
                    </div>
                </div>
            </Container>

            <div className={styles.border}></div>
            <Container>
                <div className={styles.ourCompany}>
                    <p>Công ty cổ phần phát triển VT Movie</p>
                    <p>Email: support@vtmovie.vn | Hotline :  012.345.678 ( Miễn phí)</p>
                    <p>Giấy phép Cung cấp Dịch vụ Phát thanh, Truyền hình trả tiền số 192/GP-BTTTT cấp ngày 02/8/2021.</p>
                </div>
            </Container>
        </div>
    );
}