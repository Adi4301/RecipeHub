import React, { Fragment } from 'react'

import Category from "./components/CategoryPage"
import Categories from './components/displayCategoryProducts';
import SingleRecipie from './components/singleProducts';
import IngredientsWiseProducts from "./components/displayIngredientProducts"
import AlphabetWiseProducts from "./components/displayProductsByAlphabatic"
import HomePage from './components/HomePage';
import Navbar from "./layouts/Navbar"
import 'preline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplaySearchProducts from './components/displaySearchProducts';
const App = () => {
  return (
    <Fragment>
      <main className="text-gray-400 bg-black   min-h-screen">
        <Navbar />
        <Routes>

          <Route path={"/"} element={<HomePage />} />

          <Route path={"/search/:name"} element={<DisplaySearchProducts />} />
          <Route path={"/ingredient/:name"} element={<IngredientsWiseProducts />} />
          <Route path={"/alphabet/:name"} element={<AlphabetWiseProducts />} />
          <Route path={"/category/all"} element={<Category />} />
          <Route path="/category/:name" element={<Categories />} />
          <Route path="/recipe/:id" element={<SingleRecipie/>} />


        </Routes>
      </main>
    </Fragment>
  )
}

export default App