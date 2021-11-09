import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import { graphql } from "gatsby"

const Recipes = ({ data }) => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes recipes={data.allContentfulRecipe.node}></AllRecipes>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Recipes
