
import  Axios  from 'axios';
import './App.css';

function App() {
  var  url=`https://api.spoonacular.com/recipes/search?apiKey=e8ae35effd8f4098b981c9f5c06dece1&query=chicken`;
  async function getRecipes(){
    var result= await Axios.get(url);
    console.log(result.data);
  }
  return (
    <div className="App">
     
     <h1 onClick={getRecipes}>Food</h1>
      
    </div>
  );
}

export default App;
