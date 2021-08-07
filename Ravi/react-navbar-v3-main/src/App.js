import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Watchlist from './pages/Watchlist';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Per from './pages/Per';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>y
        
        <Route path='/' exact component={Home} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Watchlist' component={Watchlist} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/Per' component={Per} />

        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
