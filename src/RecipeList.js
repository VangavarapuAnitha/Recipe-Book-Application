import React from 'react'

const RecipeList = ({recipe}) => {
  return (
    <div className='recipeList'>
      <div key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={`https://img.spoonacular.com/recipes/${recipe.image}`} alt={recipe.title} />
          </div>
    </div>
  )
}

export default RecipeList
