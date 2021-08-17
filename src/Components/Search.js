import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Search extends Component {
  
  state = {
    query: ''
  }
  
  onSearchChange = e => {
    this.setState({ query: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    let query = this.query.value;

    this.props.onSearch(this.state.query);

    this.props.history.push(`/search/${query}`);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={ this.handleSubmit } >
        <label className="is-hidden" htmlFor="search"></label>
        <input type="search" 
               onChange={ this.onSearchChange }
               name="search" 
               ref={input => (this.query = input)}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}

export default withRouter(Search);