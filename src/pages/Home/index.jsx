import { gql, useLazyQuery, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Banner, PopularList } from 'src/components'

const GET_CATEGORY_LIST = gql`
  query {
  categories(filter: { movies: { id: { gte: 1} } }, paging: { first: 100}){
    edges {
      node {
        id
        name 
      }
    }
  }
}
`

export const Home = () => {
  // Query define
  const categoryQuery = useQuery(GET_CATEGORY_LIST, {
    variables: {paging: { first: 100}}
  })
  
  // state store data
  const [listCategory,setListCategory] = useState([]);

  const renderCategoryFilms = () => {
    console.log(listCategory);
    return listCategory.map((category,index) => (
        <div key={index}>
          <PopularList
            categoryId={category.node.id}
            title={category.node.name}
          />
        </div>
      )  
    )
  }
  
  if(categoryQuery.loading){
    return <div>Loading2 ....</div>
  }
  else if(listCategory.length === 0) {
    setListCategory(categoryQuery.data.categories.edges);
  }
  return (
    <>
      <Banner />
      {renderCategoryFilms()}
    </>
  )
}
