import React from 'react';
import { Link } from 'react-router-dom';

const CourtShow = (props) => {
  return(
    <div className="court-name">
      <h2>{props.name}</h2>
      <a className="edit" href={`/courts/${props.id}/edit`}>Edit</a> &nbsp;
      <div>

      </div>
    </div>
  )
}

export default CourtShow;
