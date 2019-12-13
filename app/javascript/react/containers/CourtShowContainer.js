import React, { Component } from 'react'
import CourtShow from '../components/CourtShow'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewTile from '../components/ReviewTile'
import GoogleMapsContainer from './GoogleMapsContainer'

class CourtShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courtObject: {
        court: {},
        court_photo: {
          url: ""
        }
      },
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
        this.setState({
          courtObject: body, reviews: body.reviews
        })
      })
      .catch(error => console.error(`Error in fetch ${error.message}`));
  }

  addNewReview(formPayload) {
  let courtID = this.state.courtObject.id
  fetch(`/api/v1/courts/${this.props.match.params.id}/reviews`, {
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
    .then(body => {
      debugger
      let currentReviews = this.state.reviews
      this.setState({ reviews: currentReviews.concat(body.description) })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    const {court = {}} = this.state;
    let court_photo = ""
    if(this.state.courtObject.court.court_photo){
      court_photo = this.state.courtObject.court.court_photo
    }
    let reviews;
    reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
        key={review.id}
        reviews={review}
        />
      )
    })


    return(
      <section className="container">
      <div>
        <div className="row-top">
          <div className="court-name">
            <h3>{this.state.courtObject.court.name}</h3>
          </div>
          <div className="row">
            <div class="columns small-6">
              <h5>{this.state.courtObject.court.street}</h5>
            </div>
            <div class="columns small-6">
              <h5>{this.state.courtObject.court.city}, {this.state.courtObject.court.state}</h5>
            </div>
            <a class="edit" href={`/courts/${this.state.courtObject.court.id}/edit`}>Edit</a> &nbsp;<br />
          </div>
        </div>
        <div class="map-photo">
          <div class="court-pic">
            <img src={court_photo.url} />
          </div>

        </div>
        <div class="reviewForm">
          <ReviewFormContainer addNewReview={this.addNewReview} />
        </div>
        <div class="reviews">
        {reviews}
        </div>
      </div>
    </section>
    )
  }
}

export default CourtShowContainer


// <div id="map_canvas">
// <GoogleMapsContainer courtCoordinates={this.state.courtObject.court} />
// </div>
