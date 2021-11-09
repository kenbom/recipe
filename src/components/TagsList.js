import React from "react"
import setupTags from "../utils/TagsList"

const TagsList = ({ recipes }) => {
  console.log(recipes)
  const newTag = setupTags(recipes)
  return (
    <div>
      <h4>this is taglist</h4>
    </div>
  )
}

export default TagsList
