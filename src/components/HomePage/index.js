import React, { Fragment } from 'react'
import ListAlphabet from './ListAlphabet'
import ListCategories from './ListCategories'
// import RandomMeal from './RandomMeal'
import SearchButton from './SearchButton'

const Index = () => {
  return (
    <Fragment>
      <SearchButton />
      <ListCategories />
      <ListAlphabet />
    </Fragment>
  )
}

export default Index