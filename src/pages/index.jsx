import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Banner, PopularList } from 'src/components'
import { SkeletonComponent } from 'src/components/SkeletonComponent'
import client from 'src/ulti/apollo-client'
// pages/index.js
const GET_CATEGORY_LIST = gql`
  query {
    categories(filter: { movies: { id: { gte: 1 } } }, paging: { first: 100 }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_CATEGORY_LIST,
    variables: { paging: { first: 100 } },
  })

  return {
    props: {
      listCategory: data.categories.edges,
    },
  }
}
export default function Home({ listCategory }) {
  const renderCategoryFilms = () => {
    return listCategory.map((category, index) => (
      <div key={index}>
        <PopularList categoryId={category.node.id} title={category.node.name} />
      </div>
    ))
  }

  return (
    <>
      <Banner />
      {renderCategoryFilms()}
    </>
  )
}
