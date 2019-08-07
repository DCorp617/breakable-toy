import React, { Component } from 'react'
import CourtShow from '../components/CourtShow'
import ReviewFormContainer from './ReviewFormContainer'
import GoogleMapsContainer from './GoogleMapsContainer'

class CourtShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      court: {},
      reviews: []
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
      .then(body => {
        debugger
        this.setState({
          court: body.court, reviews:body.reviews
        })
      })
      .catch(error => console.error(`Error in fetch ${error.message}`));
  }

  addNewReview(formPayload) {
  let courtID = this.props.match.params.id
  let fetchUrl = `/api/v1/courts/${courtID}/reviews`
  fetch(`${fetchUrl}`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
    body: JSON.stringify(formPayload)
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(courtInfo => {
      this.setState({ court: courtInfo })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render(){
    let court_photo;
    debugger
    return(
      <div>
        <div>
          <CourtShow
            key={this.state.court.id}
            id={this.state.court.id}
            name={this.state.court.name}
            picture={this.state.court.court_photo}
          />
        </div>

        <div className="court-map">
          <GoogleMapsContainer courtCoordinates={this.state.court} />
        </div>
        <ReviewFormContainer addNewReview={this.addNewReview} />
      </div>
    )
  }
}

export default CourtShowContainer
