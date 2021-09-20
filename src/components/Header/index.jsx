import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link'
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
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    if(!loading && data && callApi) {
        setCallApi(false);
        setSearchData(data.movies.edges);
    }
    console.log(searchData);
    const changeSearchInput = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
        setCallApi(true);
        getMovieSearch({ variables: {filter: { name: { like: `%${searchValue}%`}}, paging: { first: 6 }}})
    }
    const renderSearchResult = () => {
        if(!searchValue.length) return null;
        return searchData.map((search,index) => {
            return <Link onClick={()=> {setSearchValue("")}} href={`/xem-phim/${encodeURIComponent(search.node.id)}`}>
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
                            <Link href="/">VT MOVIE</Link>
                        </div>
                        
                        <div className={styles.logoHeaderMobile}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        
                        <div className={styles.search}>
                            <input value={searchValue} onChange={changeSearchInput} type="text" placeholder="Tìm:tên phim, đạo diễn , diễn viên" />
                            <ion-icon name="search-outline"></ion-icon>
                            <div className={styles.searchContent}>
                                {renderSearchResult()}
                            </div>
                        </div>

                        <div className={styles.logoMobile}>phim<span>Chill</span></div>

                        <ul className={`${styles.listPage}`}>
                            <li>
                                <Link href="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link href="/category">Thể Loại</Link>
                            </li>
                            <li>
                                <Link href="/country">Quốc gia</Link>
                            </li>
                            <li>
                                <Link href="/oddMovie">Phim lẻ</Link>
                            </li>
                            <li>
                                <Link href="/seriesMovie">Phim Bộ</Link>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Container>
        </div>
    );
}