// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';

// import apiKey from '../config';

// import Nav from './Nav';
// import NotFound from './NotFound';
// import Search from './Search';
// //import PhotoContainer from './PhotoContainer';

// class App extends Component {
// //TODO - pull in data from API 
// //const props = 

//   //set state & mount 
//   /*setState({
//     photos: [],
//     page: 1,
//     perPage: 24,
//     isLoading: false*/

//   //function search images tags

//   //render & routes
//   render() {
//     return (
//       <div>
//         <Search />
//         <Router>
//           <Route path='/sloths'>
//             This will be Sloths! 
//           </Route>
//           <Route path='/newyork'>
//             This will be New York! 
//           </Route>
//           <Route path='/mountains'>
//             This will be Mountains! 
//           </Route>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;

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
      photos: []
    };
  } 

  componentDidMount() {

  }
  
  performSearch = (query) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}




