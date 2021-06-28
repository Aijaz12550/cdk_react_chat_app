import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Signup } from "./views"

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/signup" component={Signup} />
     </Switch>
   </Router>
  );
}

export default App;
