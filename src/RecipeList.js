import React from 'react'
import "./RecipeList.css"
const RecipeList = ({recipe}) => {
    const imageUrl=recipe.image;
  return (
    <div className='recipeList'>
      <div key={recipe.id}>
            <img src={imageUrl } className='recipe_image' alt={recipe.title} />
            <p className='recipe_title'>{recipe.title}</p>
          </div>
    </div>
  )
}

export default RecipeList
