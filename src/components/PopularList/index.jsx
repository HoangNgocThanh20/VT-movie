import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { PopularItem } from 'src/components';
import styles from './PopularList.module.scss';
import { gql, useLazyQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router-dom';

const GET_MOVIE_LIST = gql`
  query movies($filter: MovieFilter,$paging: CursorPaging) {
    movies(filter: $filter,paging: $paging) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
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
    }
  }
`

export const PopularList = (
    {
        title,
        categoryId
    }
) => {

    const [getMovieList, { called, loading, data }] = useLazyQuery(GET_MOVIE_LIST)
    const [dataMovie, setDataMovie] = useState([])

    useEffect(() => {
        if(!data) return;
        const dataRes = data.movies.edges.map((dt) => dt.node)
        setDataMovie(dataMovie.concat(dataRes))
      }, [data])
      
    useEffect(() => {
        document.title = 'VT - Movie';
        getMovieList({ variables: {filter: { categories: { id: { eq: categoryId }}}, paging: { first: 12 } } })
    }, [])
    const history = useHistory();
    const handleShowAllCatory = () => {
        history.push(`/home/${title.split(' ').join('-')}?id=${categoryId}`)
    }

    return (
        <Container className={styles.main}>
            <div className={`${styles.header} fontPoppin`} onClick={handleShowAllCatory}>
                {title}
            </div>
            <div className={styles.wrapper}>
               {dataMovie.map((item, index) => {
                   return (
                       <PopularItem
                        item={item}
                        key={index} 
                        image={item.poster}
                        header={item.name}
                        title={item.title}
                        />
                   )
               })}
            </div>
        </Container>
    );
}
