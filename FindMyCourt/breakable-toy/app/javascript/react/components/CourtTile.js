import React from 'react'
import { Link } from 'react-router-dom'

const CourtTile = props => {
  return(
    <li>
      <a href={`/courts/${props.id}`}>{props.name}</a>
    </li>
  )
}

export default CourtTile
