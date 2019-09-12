import React, { Component } from 'react'

class HomeIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    return(
      <div>
        <section className="container-fluid benefits">
          <div className="row">
            <div className="column small-4">
              <h3> Find Courts </h3>
              <i className="fas fa-binoculars"></i>
            </div>
            <div className="column small-4">
              <h3> Add Courts </h3>
              <i className="fas fa-plus-circle"></i>
            </div>
            <div className="column small-4">
              <h3> Interact with other players </h3>
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
        </section>
        <div className="row align-center">
          <div className="column center">
            <a href="index.html" className="button primary">Find Courts Near You</a>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeIndexContainer
