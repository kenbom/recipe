import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

const Recipes = () => {
  return (
    <Layout>
      <main className="page"></main>
      <AllRecipes></AllRecipes>
    </Layout>
  )
}

export default Recipes
