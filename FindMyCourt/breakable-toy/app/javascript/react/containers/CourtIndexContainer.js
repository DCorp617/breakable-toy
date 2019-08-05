// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import CourtTile from '../components/CourtTile'
//
// class CourtIndexContainer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       courts: []
//     }
//   }
//
//   componentDidMount(){
//     fetch('api/v1/courts')
//      .then(response => {
//        if(response.ok){
//          return response
//        } else {
//          let errorMessage = `${response.status} (${response.statusText})`,
//           error = new Error(errorMessage)
//         throw(error);
//        }
//      })
//      .then(response => response.json())
//      .then(courts => {
//        this.setState({ courts: courts})
//      })
//      .catch(error => console.error(`Error in fetch: ${error.message}`))
//   }
//
//   handleSubmit(event){
//     event.preventDefault()
//     let formPayload = {
//       courts: this.state.newCourt
//     }
//     fetch('api/v1/courts',  {
//       credentials: "same-origin",
//       method: "POST",
//       body: JSON.stringify(formPayload),
//       header: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => {
//         if(response.ok){
//           return response
//         } else {
//           let errorMessage = `${response.status} (${response.statusText})`,
//             error = new Error(errorMessage)
//           throw error
//         }
//       })
//       .then(response => response.json())
//       .then(body => {
//         let currentCourts = this.state.courts
//         this.setState({ courts: currentCourts.concat(court.name) })
//       })
//       .catch(error => console.error(`Error in fetch: ${error.message}`))
//   }
//
//   render(){
//     let courtIndex = this.state.courts.map(court => {
//       return(
//         <CourtTile
//           key={court.id}
//           id={court.id}
//           name={court.name}
//         />
//       )
//     })
//     return(
//       <div>
//         <h1>Courts Near You</h1>
//         <h4>{courtIndex}</h4>
//         <div className="new-court">
//           <a href="/courts/new" >
//             <div className="button">Add A Court</div>
//           </a>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default CourtIndexContainer
