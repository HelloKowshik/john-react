import React from 'react';
import Home from './Home';
import About from './About';
import People from './People';
import Person from './Person';
import ErrorPage from './Error';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RouterSetUp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />} />
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterSetUp;
