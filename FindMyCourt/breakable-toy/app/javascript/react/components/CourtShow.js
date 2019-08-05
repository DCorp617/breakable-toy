import React from 'react';
import { Link } from 'react-router-dom';

const CourtShow = (props) => {
  return(
    <div className="court-name">
      <h2>{props.name}</h2>
      <a href={`/courts/${props.id}/edit`}>Edit</a> &nbsp; / &nbsp;
    </div>
  )
}

export default CourtShow;
