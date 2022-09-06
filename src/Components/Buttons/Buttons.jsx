import React from 'react'
import './Buttons.css'

function Buttons({name, onClickButton}) {
  return (
    <button onClick={onClickButton}>{name}</button>
  )
}

export default Buttons