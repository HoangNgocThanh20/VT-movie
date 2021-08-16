import { gql, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Banner, PopularList } from 'src/components'
import { Container } from '@material-ui/core';
import { PopularItem } from 'src/components/PopularItem';
import { useRouter } from 'next/router'
import styles from 'src/components/PopularList/PopularList.module.scss';

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

export default function CategoryList () {
  const router = useRouter();
  const { madanhsach, theloai } = router.query;
  const [getMovieList, { called, loading, data }] = useLazyQuery(GET_MOVIE_LIST)
  const [dataMovie, setDataMovie] = useState([])
  useEffect(() => {
    // go to top
    document.documentElement.scrollTop = 0;
    getMovieList({ variables: { filter: { categories: { id: { eq: +madanhsach}}}, paging: { first: 6 } } })
  }, [])

  useEffect(() => {
    if(!data) return;
    const dataRes = data.movies.edges.map((dt) => dt.node)
    setDataMovie(dataMovie.concat(dataRes))
    if (data.movies.pageInfo.hasNextPage) {
      console.log('Call api')
      getMovieList({
        variables: {
          filter: { categories: { id: { eq: +madanhsach}}},
          paging: { first: 12, after: data.movies.pageInfo.endCursor },
        },
      })
    }
  }, [data])
  return (
    <>
     <Container className={styles.main}>
            <div className={`${styles.header} fontPoppin`}>
                {theloai?.split('-').join(' ')}
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
    </>
  )
}