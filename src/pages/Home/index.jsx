import { gql, useQuery } from '@apollo/client';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { Banner, PopularList } from 'src/components';

const GET_MOVIE_LIST = gql`
query getMovieList($name: String){
  getMovieList(name: $name){
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

export const Home = () => {

    const { loading, data } = useQuery(GET_MOVIE_LIST, {
        variables: { name: "" },
    });

    useEffect(() => {
      document.title = "Home"
    },[]);

    if(loading)
        return <>
          <Banner />
          <div>Loading ...</div>
        </>;
    else {
        console.log(data.getMovieList);
    }
    
    return (
        <>
            <Banner />
            <PopularList listItem={data.getMovieList}/>
        </>
    );
}
