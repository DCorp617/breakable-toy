import React from "react"

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <p>{props.reviews.description}</p>
    </div>
  )
}

export default ReviewTile
