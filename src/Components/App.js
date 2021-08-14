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

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      isLoading: false
    };
  } 

  componentDidMount() {

  }
  
  performSearch = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.data
        });
      })
      .catch(error => {
        console.log('Oops, there was an error. Please try again.', error);
      });    
  }
  
  render() {
        return (
          <Router>
            <div className="container">
              <Search onSearch={this.searchResults} />
              <Nav />
              <div>
                <Switch>
                  <Route path='/sloths'>
                    This will be Sloths! 
                  </Route>

                  <Route path='/newyork'>
                    This will be New York! 
                  </Route>

                  <Route path='/mountains'>
                    This will be Mountains! 
                  </Route>
                </Switch>
              </div>
            </div>
          </Router>
        );
      }
    }
    
    //export default App;


