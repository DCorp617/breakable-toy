import React from 'react';

const CourtShow = (props) => {

  if(props.court.court == null){
    return(
      <div>
        props not rendered yet
      </div>
    )
  } else {
      return(
        <div className="court-name">
        <h2>{props.court.court.name}</h2>
          <a className="edit" href={`/courts/${props.court.court.id}/edit`}>Edit</a> &nbsp;<br />
          <div className="court-image">
          <img class="card-panel" src={props.court.court.court_photo.url} />
          </div>
        </div>
      )
  }
}

export default CourtShow;
