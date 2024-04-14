import React from "react";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const handleRecipeClick = (id) => {
    window.open(`/RecipeDetails/${id}`, "_blank");
  };

  return (
    <div className="recipeList">
      {recipes.map((recipe) => (
        <div
          className="recipeCard"
          key={recipe.id}
          onClick={() => handleRecipeClick(recipe.id)}
        >
          <img src={recipe.image} className="recipe_image" alt={recipe.title} />
          <p className="recipe_title">{recipe.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
