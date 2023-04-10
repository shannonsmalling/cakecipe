import logo from './IMG_3003.jpg';
import './App.css';
import Card from './Card';
import {Link, Route, Routes} from 'react-router-dom'; 
// import {Link} from 'react-router-dom'; 
import Victoriasponge from './victoriasponge';
import Counter from './counter';


function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to= "/Victoriasponge"> Click
      </Link>
        {/* <Link to="/victoriasponge">
        <button>Click</button>
      </Link>
      <Routes>
        <Route path="/victoriasponge" element={<victoriasponge/>} />
      </Routes> */}
        {/* <h1>Hello CFG team my name is Shannon! 👩🏽</h1>
        <h2 class="h2_greeting">I'm from Birmingham</h2>
        <p class="myFavouriteBook">My favourite book is "A thousand splendid suns" by Khaled Hosseini 📚</p>
        <p>My favourite film is Man on Fire. 🔥</p> */}
        {/* <Button/>
        <button buttonName={'Output'}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a> */}
        <p class="about-us">
          One stop shop for your favourite cake recipes for your selected serving size. 
        </p>
      </header>
      <div className="App-body">
        <h1>
          Cakes 
        </h1>
        <Counter/>
        <div className= "recipe-card"><Card 
        title = {"Victoria Sponge Recipe"}
        preparationtime = {"Preparation Time: less than 30 minutes"}
        cookingtime = {"Cooking Time: 40 minutes"}
        serving = {"Serving: 12"}
        /> 
        <Card 
        title = {"Red Velvet Recipe"}
        preparationtime = {"Preparation Time: 1 hour and 5 minutes"}
        cookingtime = {"Cooking Time: 1 hour"}
        serving = {"Serving: 18"}
        /> 
        <Card 
        title = {"Chocolate Fudge Cake Recipe"}
        preparationtime = {"Preparation Time: 1hr "}
        cookingtime = {"Cooking Time: 50 minutes"}
        serving = {"Serving: 16"}
        /></div>
      </div>
      
    </div>
  );
}

export default App;
