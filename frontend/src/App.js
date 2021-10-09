import './App.css';
import { Route } from 'react-router';
import Home from './presentationComponents/Home.jsx'
import Game from './actionComponents/Game'
import UserData from './actionComponents/userData';
 
function App() {
  return (
    <div className="App">
      <Route path = '/' exact component = {Home}/>
      <Route path = '/userData' exact component = {UserData}/>
      <Route path = '/game' exact component = {Game}/>
    </div>
  );
}

export default App;