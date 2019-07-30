import React from 'react';
import { Link } from 'react-router-dom';

const CourtShow = (props) => {
  return(
    <div className="court-show">
      <h2>{props.name}</h2>
    </div>
  )
}

export default CourtShow;
