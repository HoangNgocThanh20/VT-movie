import { Container } from '@material-ui/core';
import React from 'react';
import styles from './DetailMove.module.scss';
import { gql, useQuery } from '@apollo/client';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { slug } from 'src/ulti/slug';

const GET_MOVIE_BY_ID = gql`
query getMovieById($id: Float!){
  getMovieById(id: $id){
    name
    id
    poster
    description
    movieParts {
      type
      part
      movieServers {
        provider
        movieLinks {
          name
          videoLink
        }
      }
    }
  }
  }
  `
export const DetailMovie = () => {
  const params = useParams();
    const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
        variables: { id: Number.parseInt(params.MovieId)},
    });

    if(loading) {
      return <div>loading....</div>
    }
    return (
        <Container className={styles.wrapper}>
            <div className={styles.title}>
                {data.getMovieById.name}
            </div>
            <div className={styles.movie}>
            <iframe width="100%" height="600px" src={`${data.getMovieById.movieParts[0].movieServers[0].movieLinks[0].videoLink}`} title="W3Schools Free Online Web Tutorials" allowfullscreen="true"></iframe>
            </div>

            <div className={styles.detailContent}>
                <div className={styles.logoDetail}>
                    <img src={`${data.getMovieById.poster}`} alt="" />
                    <div className={styles.wrapperDetail}>
                      <div className={styles.midDetail}>
                          <p>{data.getMovieById.description}</p>
                          <p>Lượt xem: 1.123.234 lượt xem</p>
                          {/* <p>2020 | Mỹ | 1 Tập</p> */}
                      </div>
                      <div className={styles.footerDetail}>
                          {data.getMovieById.description}
                      </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}