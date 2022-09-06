import React from 'react'
import './Cards.css'

function Cards({name, imgSrc, gender, episode, status, origin}) {
  return (
    <div className='Card'>
        <img src={imgSrc} alt="" />
        <h2>{name}</h2>
        <h2>Origem: <span>{origin}</span></h2>
        <h2>Gênero: <span>{gender}</span></h2>
        <h2>Aparições no Total: <span>{episode}</span> </h2>
        <h2>Status: <span>{status}</span></h2>
    </div>
  )
}

export default Cards