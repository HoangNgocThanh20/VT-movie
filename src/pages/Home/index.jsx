import { gql, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Banner, PopularList } from 'src/components'

const GET_MOVIE_LIST = gql`
  query movies($paging: CursorPaging) {
    movies(paging: $paging) {
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

export const Home = () => {
  const [getMovieList, { called, loading, data }] = useLazyQuery(GET_MOVIE_LIST)
  const [dataMovie, setDataMovie] = useState([])
  useEffect(() => {
    document.title = 'Home'
    getMovieList({ variables: { paging: { first: 6 } } })
  }, [])

  useEffect(() => {
    if(!data) return;
    const dataRes = data.movies.edges.map((dt) => dt.node)
    setDataMovie(dataMovie.concat(dataRes))
    if (data.movies.pageInfo.hasNextPage) {
      console.log('Call api')
      getMovieList({
        variables: {
          paging: { first: 12, after: data.movies.pageInfo.endCursor },
        },
      })
    }
  }, [data])

  if (!dataMovie.length)
    return null;

  return (
    <>
      <Banner />
      <PopularList listItem={dataMovie} />
    </>
  )
}
