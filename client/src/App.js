import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react'
import Home from './components/Home';
import Card from './components/Card';
import Landing from './components/Landing';
import AddActivity from './components/AddActivity';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      
      <Route exact path="/" component={Landing} />
      {/* <Nav /> */}
      <Route exact path='/countries' component={Home} />
      <Route exact path='/countries/:id' component={Card} />
      <Route exact path='/activity' component={AddActivity} />
    </BrowserRouter>
  );
}

export default App;