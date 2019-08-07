import React, { Component } from "react"
import TextField from '../components/TextField'


class ReviewFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviewDescription: '',
      errors: {}
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.validateBody = this.validateBody.bind(this)
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      reviewDescription: ''
    })
  }

  handleBodyChange(event){
    this.setState({ reviewDescription: event.target.value })
  }

  handleFormSubmit(event){
    event.preventDefault();
    let formPayload = {
      description: this.state.reviewDescription
    }
    this.props.addNewReview(formPayload);
    this.handleClearForm(event);
  }

  validateBody(input){
    if(input.trim() === ''){
      let newError = { reviewBodyInput: 'You must input a review body.' }
      this.setState({ errors: Object.assign({}, this.state.error, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.reviewBodyInput
      this.setState({ errors: errorState })
      return true
    }
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div className="review">
        <h3>Reviews</h3>
          <TextField
            handlerFunction={this.handleBodyChange}
            content={this.state.reviewDescription}
            label="Description"
            name="Description"
          />
          <div className="button-group">
            <button className="form-button" onClick={this.handleClearForm}>Clear</button>
            <input className="form-button" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    )
  }
}

export default ReviewFormContainer
