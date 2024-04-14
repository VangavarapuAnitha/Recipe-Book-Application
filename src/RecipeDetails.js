import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [showInstructions,setShowInstructions]= useState(false);
  const [showIngredients,setShowIngredients]= useState(false);
  const API_KEY = "236ad32b208a45f48724c6069ec39aea";

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

  const handleInstruction=() =>{
    setShowInstructions(true);
    setShowIngredients(false);
  }
  const handleIngredients=() =>{
    setShowIngredients(true);
    setShowInstructions(false);
    
  }
  return (
    <div>
      <Link to="/" className="backToHome">
        Back to Home
      </Link>
      <div >
      <button className="search_button" onClick={handleInstruction}>Instructions</button>
        <button className="search_button" onClick={handleIngredients}>Ingredients</button>
        <h1 className="recipe_title">{details.title}</h1>
        <img src={details.image} alt={details.title} className="recipe_image" />
        </div>
        
        {showInstructions && (<div><p dangerouslySetInnerHTML={{ __html: details.summary }}></p></div>)}
        {/* <button className="button" onClick={() => setActiveTab(ingredients)}>Ingredients</button> */}
        
      <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        {/* <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p> */}
      
      {showIngredients && (<div>
        <ul>
          {details.extendedIngredients &&
            details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>
      </div>)}
      
      
    </div>
  );
};

export default RecipeDetails;
