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
        <div className="grid-container">
          <div class="grid-x grid-margin-x small-up-2 medium-up-3">
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <h1> Find Courts </h1>
                </div>
              </div>
            </div>
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <h1> Add Courts </h1>
                </div>
              </div>
            </div>
            <div className="cell">
              <div className="card">
                <div className="card-section">
                  <h1> Interact with other players </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="index.html" className="button primary">Find Courts Near You</a>
      </div>
    )
  }
}

export default HomeIndexContainer
