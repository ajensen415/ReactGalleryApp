import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import apiKey from '../config';

import Nav from './Nav';
import NotFound from './NotFound';
import Search from './Search';

class App extends Component {
  //set state & mount 
  /*setState({
    photos: [],
    page: 1,
    perPage: 24,
    isLoading: false*/

  //function searh images tags

  //render & routes
  render() {
    return (
      <div>App</div>
    );
  }
}

export default App;