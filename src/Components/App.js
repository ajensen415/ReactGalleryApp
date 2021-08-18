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
import PhotoContainer from './PhotoContainer';

class App extends Component {

  //set state to empty arrays for default images
  state = {

    photos: [],
    slothPhotos: [],
    brooklynPhotos: [],
    mountainsPhotos: [],

    searchQuery: '',
    searchPhotos: [],
    isLoading: true
  }

  //fecth data from flickr for 3 default image groups
  componentDidMount() {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sloths&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          slothPhotos: responseData.photos.photo,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Oops! There was an error with this search. Please try again', error);
      });

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=brooklyn&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          brooklynPhotos: responseData.photos.photo,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Oops! There was an error with this search. Please try again', error);
      });
    
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          mountainsPhotos: responseData.photos.photo,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Oops! There was an error with this search. Please try again', error);
      });
  }

  //search function to fetch images matching tag in query
  performSearch = (query) => {
    this.setState({ isLoading: true });
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          searchPhotos: responseData.photos.photo,
          searchQuery: query,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Oops! There was an error with this search. Please try again', error);
      });
  }

  
  render() {
        return (
          <Router>
            <div className="container">
              <Search onSearch={this.performSearch} searchData={this.searchQuery} />
              <Nav />
              <div>
                <Switch>
                  <Route exact path='/' render={() => 
                    <PhotoContainer 
                      imageData={this.state.photos}/>
                    } 
                  />

                  <Route path='/sloths' render={() => 
                    <PhotoContainer 
                      imageData={this.state.slothPhotos}
                    />
                    } />

                  <Route path='/brooklyn' render={() => 
                    <PhotoContainer 
                      imageData={this.state.brooklynPhotos}
                    />
                    } />

                  <Route path='/mountains' render={() => 
                    <PhotoContainer 
                      imageData={this.state.mountainsPhotos}
                    />
                    } />
                    
                  <Route path="/search/:query" render={ () => 
                    <PhotoContainer 
                      imageData={this.state.searchPhotos}
                      searchQuery={this.state.searchQuery}
                      newSearch={this.performSearch}
                    />
                  }/>
                </Switch>
                <NotFound />
              </div>
            </div>
          </Router>
        );
      }
    }
    
export default App;


