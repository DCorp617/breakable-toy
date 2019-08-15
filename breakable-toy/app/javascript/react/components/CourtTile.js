import React from 'react'

const CourtTile = props => {
  return(
    <ul className="court">
      <a href={`/courts/${props.id}`}>{props.name}</a>
    </ul>
  )
}

export default CourtTile
