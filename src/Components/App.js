import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import apiKey from '../config';

import Nav from './Nav';
import NotFound from './NotFound';
import Search from './Search';
//import PhotoContainer from './PhotoContainer';

class App extends Component {
//TODO - pull in data from API 
//const props = 

  //set state & mount 
  /*setState({
    photos: [],
    page: 1,
    perPage: 24,
    isLoading: false*/

  //function search images tags

  //render & routes
  render() {
    return (
      <div>
        <Search />
        <Router>
          <Route path='/sloths'>
            This will be Sloths! 
          </Route>
          <Route path='/newyork'>
            This will be New York! 
          </Route>
          <Route path='/mountains'>
            This will be Mountains! 
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;