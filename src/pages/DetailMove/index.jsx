import { gql, useQuery } from '@apollo/client';
import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailMove.module.scss';

const GET_MOVIE_BY_ID = gql`
query movie($id: Int!){
  movie(id: $id){
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
    else {
      document.title = `${data.movie.name}`
    return (
        <Container className={styles.wrapper}>
            <div className={styles.title}>
                {data.movie.name}
            </div>
            <div className={styles.movie}>
              <iframe width="100%" height="600px" src={`${data.movie.movieParts[0].movieServers[0].movieLinks[0].videoLink}`} title="W3Schools Free Online Web Tutorials" allowfullscreen="true"></iframe>
            </div>

            <div className={styles.detailContent}>
                <div className={styles.logoDetail}>
                   <img src={`${data.movie.poster}`} alt="" />
                </div>
                <div className={styles.wrapperDetail}>
                      <p>{data.movie.description}</p>
                </div>
            </div>
            {/* <p className={styles.countViews}>Lượt xem: 1.123.234 lượt xem</p> */}
        </Container>
    );
    }
}