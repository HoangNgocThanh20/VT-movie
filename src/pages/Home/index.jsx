import React, { useEffect, useState } from 'react';
import { Banner, PopularList } from 'src/components';
import { gql, useQuery } from '@apollo/client';

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

    const { loading, error, data } = useQuery(GET_MOVIE_LIST, {
        variables: { name: "" },
    });

    if(loading)
        return <div>Loading...</div>;
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
