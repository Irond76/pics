import React, { Component } from 'react'

// This Component is a search bar for the user
// to enter a keyword to search for


export class SearchBar extends Component {
  render() {
    return (
      <div className= "ui segment">
          <form className= "ui form" >
            <div className= "field" >
                <label >Image Search</label>
                <input type="text" /> 
            </div> 
          </form>
      </div>
    );
  }
}

export default SearchBar