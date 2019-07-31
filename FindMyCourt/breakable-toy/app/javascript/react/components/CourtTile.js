import React from 'react'
import { Link } from 'react-router-dom'

const CourtTile = props => {
  return(
    <ul className="court">
      <a href={`/courts/${props.id}`}>{props.name}</a>
    </ul>
  )
}

export default CourtTile
