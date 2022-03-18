import React, { Component } from 'react'

// This Component is a search bar for the user
// to enter a keyword to search for
// the styling is coming from semantic ui


export class SearchBar extends Component {
    // function for change in search bar input
    onInputChange(event) {
        console.log(event.target.value);
    }


  render() {
    return (
      <div className= "ui segment">
          <form className= "ui form" >
            <div className= "field" >
                <label >Image Search</label>
                <input type="text" onChange={this.onInputChange} /> 
            </div> 
          </form>
      </div>
    );
  }
}

export default SearchBar