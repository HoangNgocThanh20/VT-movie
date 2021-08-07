import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Banner, PopularList } from 'src/components';

const GET_MOVIE_LIST = gql`
query movies($paging: CursorPaging){
  movies(paging: $paging){
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
    const { loading, data } = useQuery(GET_MOVIE_LIST, {
        variables: { paging: { first: 24 } },
    });
    const [dataMovie, setDataMovie] = useState([]);
    useEffect(() => {
      document.title = "Home"
    },[]);

    if(loading)
        return <>
          <Banner />
          <div>Loading ...</div>
        </>;
    else if(!dataMovie.length) {
        console.log(data.movies.edges);
        const dataRes = data.movies.edges.map(dt => dt.node);
        setDataMovie(dataRes);
    }
    
    return (
        <>
            <Banner />
            <PopularList listItem={dataMovie}/>
        </>
    );
}
