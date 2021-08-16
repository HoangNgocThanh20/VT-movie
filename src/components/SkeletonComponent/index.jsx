import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import styles from './SkeletonComponent.module.scss';

export const SkeletonComponent = () => {
    return (
        <>
        <Container className={styles.wrapperSkeleton}>
          <Grid container>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            <Grid item xs={3}>
                <Skeleton variant="rect" width={161} height={227} />
            </Grid>
            
          </Grid>
        </Container>
        </>
    );
}