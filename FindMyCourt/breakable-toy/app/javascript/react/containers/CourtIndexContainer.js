import React, { Component } from 'react'
import CourtTile from '../components/CourtTile'

class CourtIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      courts: []
    }
  }

  componentDidMount(){
    fetch('api/v1/courts')
     .then(response => {
       if(response.ok){
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error);
       }
     })
     .then(response => response.json())
     .then(courts => {
       this.setState({ courts: courts})
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){
    let courtIndex = this.state.courts.map(court => {
      return(
        <CourtTile
          key={court.id}
          id={court.id}
          name={court.name}
        />
      )
    })
    return(
      <div>
        <h1>Courts Near You</h1>
        <h4>
        {courtIndex}
        </h4>
      </div>
    )
  }
}

export default CourtIndexContainer
