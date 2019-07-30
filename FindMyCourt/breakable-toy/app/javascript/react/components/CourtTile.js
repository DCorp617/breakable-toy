import React from 'react'
import { Link } from 'react-router-dom'

const CourtTile = props => {
  return(
    <a href={`/courts/${props.id}`}>{props.name}</a>
  )
}

export default CourtTile
