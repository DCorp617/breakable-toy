import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.timer = null
    this.state = {
      ballCourts: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
    clearTimeout(this.timer)
    this.timer = setTimeout(
      function(){
        this.handleSubmit()
      }
      .bind(this),
      250
    )
  }

  handleSubmit(){
    let payload = this.state.searchString
    this.props.handleFetch(payload)
  }

  render(){

    return(
      <div>
        <form>
          <label>Search</label>
          <input
            type='text'
            name='searchString'
            placeholder='Search'
            value={this.state.searchString}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar
