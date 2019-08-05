import React, { Component } from 'react'
import CourtShow from '../components/CourtShow'
import ReviewFormContainer from './ReviewFormContainer'
import GoogleMapsContainer from './GoogleMapsContainer'

class CourtShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      court: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  componentDidMount(){
    let courtId = this.props.match.params.id

    fetch(`/api/v1/courts/${courtId}`)
      .then(response => {
        if(response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(court => {
        this.setState({ court: court })
      })
      .catch(error => console.error(`Error in fetch ${error.message}`));
  }

  addNewReview(formPayload){
    let courtId = this.props.match.params.id
    fetch(`/api/v1/courts/${courtId}/reviews`, {
      credentials: "same-origin",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
      .then(response => {
        if(response.ok){
          return response;
        } else {
          let errorMessage = `${response.status} (${response.status})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        debugger
        this.setState({ court: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return(
      <div>
        <div>
          <CourtShow
            key={this.state.court.id}
            id={this.state.court.id}
            name={this.state.court.name}
          />
        </div>

        <div>
          <GoogleMapsContainer />
        </div>
        <ReviewFormContainer addNewReview={this.addNewReview}/>
      </div>
    )
  }
}

export default CourtShowContainer
