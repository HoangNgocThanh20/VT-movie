import { Container } from '@material-ui/core';
import React from 'react';
import { PopularItem } from 'src/components';
import styles from './PopularList.module.scss';

export const PopularList = (
    {
        listItem
    }
) => {
    return (
        <Container className={styles.main}>
            <div className={`${styles.header} fontPoppin`}>
                THỊNH HÀNH
            </div>
            <div className={styles.wrapper}>
               {listItem.map((item, index) => {
                   return (
                       <PopularItem
                        key={index} 
                        image={item.img}
                        header={item.head}
                        title={item.title}
                        />
                   )
               })}
            </div>
        </Container>
    );
}
