import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const API_KEY = "80f473d4318d4e5e813972d04fa9883d";

  const fetchDefaultRecipes = async () => {
    try {
      const result = await Axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=vegetarian`
      );
      setRecipes(result.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDefaultRecipes();
  }, []);

  async function getRecipes() {
    var url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`;
    try {
      var result = await Axios.get(url);
      setRecipes(result.data.results);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="app">
      <h1 className="app_title">Recipe Book Application</h1>
      <BrowserRouter>
        {!window.location.pathname.includes("RecipeDetails") && (
          <form className="searchForm" onSubmit={onSubmit}>
            <input
              type="text"
              className="search_input "
              placeholder="Search Recipe.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <input type="submit" className="search_button" value="Search" />
          </form>
        )}

        <div className="app_recipeList">
          <Routes>
            <Route path="/" element={<RecipeList recipes={recipes} />} />
            <Route path="/RecipeDetails/:id" Component={RecipeDetails} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
