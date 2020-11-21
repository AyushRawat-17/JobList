import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Categeory from './Category';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <Switch>
         <Route exact path='/' component={Home}/>  
         <Route exact path='/about' component={About}/>  
         <Route exact path='/categeory' component={Categeory}/>  
         <Route exact path='/contact' component={Contact}/>  
        </Switch>
    </div>
  );
}

export default App;
