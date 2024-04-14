
import  Axios  from 'axios';
import './App.css';
import { useState } from 'react';
import RecipeList from './RecipeList';

function App() {
  const [query,setQuery]=useState("");
  const [recipes,setRecipes]=useState([]);

  var  url=`https://api.spoonacular.com/recipes/search?q=${query}&apiKey=e8ae35effd8f4098b981c9f5c06dece1&query`;
  async function getRecipes(){
    try{
    var result= await Axios.get(url);
    setRecipes(result.data.results);
    console.log(result.data);
    }catch(error){
      console.error(error);
    }
  }
  const onSubmit= e => {
    e.preventDefault();
    getRecipes();}
  return (
    <div className="app">
     
     <h1 onClick={getRecipes}>Recipe Book Application</h1>
     <form className='searchForm' onSubmit={onSubmit}>
      <input type='text' className="search_input " placeholder='Search Recipe..' value={query} onChange={e => setQuery(e.target.value)}/>
      <input type='submit' className='search_button' value="Search" />
     </form>
     <div>
     {recipes.map((recipe) => {
          return <RecipeList key={recipe.id} recipe={recipe}/>;
})}
      
    </div>
    </div>
    
  );
}

export default App;
