import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { gql, useLazyQuery } from "@apollo/client";
const GET_MOVIE_LIST = gql`
query movies($filter: MovieFilter,$paging: CursorPaging){
  movies(paging: $paging, filter: $filter){
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
export const Header = () => {
    const [getMovieSearch, { called, loading, data }] = useLazyQuery(
        GET_MOVIE_LIST,
        {
            fetchPolicy: "network-only"
        }
      );
    const [callApi, setCallApi] = useState(true);
    const [searchValue, setSearchValue] = useState(true);
    const [searchData, setSearchData] = useState([]);
    if(!loading && data && callApi) {
        setCallApi(false);
        setSearchData(data.movies.edges);
    }
    console.log(searchData);
    const changeSearchInput = (e) => {
        const searchValue = e.target.value.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
        setSearchValue(searchValue);
        setCallApi(true);
        getMovieSearch({ variables: {filter: { name: { like: `%${searchValue}%`}}, paging: { first: 3 }}})
    }
    const renderSearchResult = () => {
        if(!searchValue.length) return null;
        return searchData.map((search,index) => {
            return <Link onClick={()=> {setSearchValue("")}} to={`/detailMovie/${search.node.id}`}>
                    <div key={index} className={styles.content}>{search.node.name}</div>
                </Link>
        })
    }
    return (
        <div className={`${styles.wrapper} fontPoppin`}>
            <Container>
                <Grid container>
                    <div className={styles.header}>
                        <div className={styles.logoHeader}>
                            <Link to="/home">VT MOVIE</Link>
                        </div>
                        <div>
                            <div className={styles.search}>
                                <input onClick={() => setSearchValue(" ")} onChange={changeSearchInput} type="text" placeholder="Tìm:tên phim, đạo diễn , diễn viên" />
                                <ion-icon name="search-outline"></ion-icon>
                                <div className={styles.searchContent}>
                                    {renderSearchResult()}
                                </div>
                            </div>
                        </div>
                        <ul className={`${styles.listPage}`}>
                            <li>
                                <Link to="/home">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/category">Thể Loại</Link>
                            </li>
                            <li>
                                <Link to="/country">Quốc gia</Link>
                            </li>
                            <li>
                                <Link to="/oddMovie">Phim lẻ</Link>
                            </li>
                            <li>
                                <Link to="/seriesMovie">Phim Bộ</Link>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Container>
        </div>
    );
}