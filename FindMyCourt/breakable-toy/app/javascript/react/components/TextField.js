import React from 'react'

const TextField = props => {
  return(
    <label>
      {props.label}
      <input
        onChange={props.handlerFunction}
        name={props.name}
        type="text"
        value={props.content}
      />
    </label>
  )
}

export default TextField
