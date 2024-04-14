import React from 'react'
import "./RecipeList.css"
const RecipeList = ({recipe}) => {
  return (
    <div className='recipeList'>
      <div key={recipe.id}>
            <img src={`https://img.spoonacular.com/recipes/${recipe.image}` } className='recipe_image' alt={recipe.title} />
            <p className='recipe_title'>{recipe.title}</p>
          </div>
    </div>
  )
}

export default RecipeList
