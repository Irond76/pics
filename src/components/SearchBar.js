import React, { Component } from 'react'

// This Component is a search bar for the user
// to enter a keyword to search for
// the styling is coming from semantic ui


export class SearchBar extends Component {
    
    state = { term: ''};


  render() {
    return (
      <div className= "ui segment">
          <form className= "ui form" >
            <div className= "field" >
                <label >Image Search</label>
                <input 
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value})}/> 
            </div> 
          </form>
      </div>
    );
  }
}

export default SearchBar