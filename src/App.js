import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const API_KEY = "cad6f7f2c98642c0aa22b0a0cd6e4ea2";

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
      <h1>Recipe Book Application</h1>
      <BrowserRouter>
       
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
