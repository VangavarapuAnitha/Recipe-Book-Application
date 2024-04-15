import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [showInstructions, setShowInstructions] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const API_KEY = "5203fe61f8b348709c57dd48fc4b0b0c";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchDetails();
  }, [params.id]);

  const handleInstruction = () => {
    setShowInstructions(true);
    setShowIngredients(false);
  };
  const handleIngredients = () => {
    setShowIngredients(true);
    setShowInstructions(false);
  };
  return (
    <div>
      <div className="backToHome_container">
        <Link to="/" className="backToHome">
          Back to Home
        </Link>
      </div>

      <div className="detailsContainer">
        <div className="summary">
          <h1 className="recipeDetail_title">{details.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        <div className="imageContainer">
          <img
            src={details.image}
            alt={details.title}
            className="recipedetail_image"
          />
        </div>
      </div>
      <div className="recipe_search_button">
        <button className="search_button" onClick={handleInstruction}>
          Instructions
        </button>
        <button className="search_button" onClick={handleIngredients}>
          Ingredients
        </button>
      </div>

      {showInstructions && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </div>
      )}

      {showIngredients && (
        <div className="ingredientsContainer">
          <ul className="ingredientsList">
            {details.extendedIngredients &&
              details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id} className="ingredientsItem">{ingredient.original}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
