import React from 'react'
import './Nav.css'

function Nav({onHandleKey}) {
  return (
      <nav>
        <h1>Rick And Morty API</h1>
      <input type='text' onKeyUp={onHandleKey} />
      </nav>
  )
}

export default Nav