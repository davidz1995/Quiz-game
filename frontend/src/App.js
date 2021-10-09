import './App.css';
import { Route } from 'react-router';
import Home from './presentationComponents/Home.jsx'
import Game from './actionComponents/Game'
 
function App() {
  return (
    <div className="App">
      <Route path = '/' exact component = {Home}/>
      <Route path = '/game' exact component = {Game}/>
    </div>
  );
}

export default App;