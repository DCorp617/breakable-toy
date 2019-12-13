import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

class HomeIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      courts: []
    }
  }

  render(){
    return(
      <div>
        <div className="home">
          <section className="container-fluid benefits">
            <div className="row">
              <div className="small-4 columns text-center">
                <h3> Find Courts </h3>
                  <i className="fa fa-binoculars fa-5x"></i>
              </div>
              <div className="small-4 columns text-center">
                <h3> Add Courts </h3>
                <i className="fa fa-plus-circle fa-5x"></i>
              </div>
              <div className="small-4 columns text-center">
                <h3> Interact with other players </h3>
                <i className="fa fa-users fa-5x"></i>
              </div>
            </div>
          </section>
          <div className="row align-center">
            <div className="column center">
              <a href="index.html" className="button primary">Find Courts Near You</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndexContainer
