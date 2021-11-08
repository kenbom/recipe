import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'

const query= graphql`
{
  allContentfulRecipe {
    nodes {
      id
      title
      cookTime
      prepTime
      content {
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`

const AllRecipes = () => {
    return (
        <div>
            <h4>all recipes</h4>
            <TagsList/>
            <RecipesList/>
        </div>
    )
}

export default AllRecipes