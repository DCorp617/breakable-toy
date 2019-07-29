import React, { Component } from 'react'

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
       debugger
       this.setState({ courts: courts})
     })
     .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){
    let courtIndex = this.state.courts.map(court => {
      return(
        court.name
      )
    })
    return(
      <div>
        <h2>
        {courtIndex}
        </h2>
      </div>
    )
  }
}

export default CourtIndexContainer
