import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const API_KEY = "cad6f7f2c98642c0aa22b0a0cd6e4ea2";

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
  return (
    <div>
      <div>
        <h1>{details.title}</h1>
        <div>
        <ul>
            <li>
                <Link to="/">Back to Home</Link>
            </li>
            
        </ul>
        </div>
        <img src={details.image} alt={details.title} />
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
      </div>
      <div>
        <ul>
          {details.extendedIngredients &&
            details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
