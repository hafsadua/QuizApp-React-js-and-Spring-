import React from 'react';
import './App.css';
import Quiz from './components/createquiz'
import Question from './components/question'
import Choice from "./components/choice"
import { 
  BrowserRouter, 
  Route,
  Switch
} from "react-router-dom";
import {GlobalStoreContextProvider} from './components/storeContext';


function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      <Quiz />
      </Route>
      <Route path="/question" exact>
      <Question />
      </Route>
      <Route path="/choice" exact>
      <Choice />
      </Route>
    </Switch>
    </BrowserRouter>
    
   
    
  );
}

export default App;
