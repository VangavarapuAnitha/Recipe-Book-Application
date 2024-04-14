import React from 'react'
import "./RecipeList.css"
import { Link } from 'react-router-dom';
const RecipeList = ({recipes}) => {
    // const imageUrl=recipe.image;
  return (
    <div className='recipeList'>
        {recipes.map(recipe => (
        <Link to ={`/RecipeDetails/${recipe.id}`}key={recipe.id}>
        <div className='recipeCard'>
            <img src={recipe.image } className='recipe_image' alt={recipe.title} />
            <p className='recipe_title'>{recipe.title}</p>
         </div>
         </Link>))}
    </div>
  )
}

export default RecipeList
