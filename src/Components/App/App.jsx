import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import './App.css'

import { useState, useEffect } from 'react'
import Buttons from '../Buttons/Buttons';

function App() {

  const [characters, setCharacters] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [charactersSelecteds, setCharactersSelecteds] = useState(characters)

   useEffect(() => {
       fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then(resp => resp.json())
      .then(data => setCharacters(data.results))

  }, [pageNumber])

  function selectCharacter(e) {
    let charactersSeteds = []
    let value = e.target.value
    characters.forEach(Element => {
      if (Element.name.includes(value) && value !== '') {
        charactersSeteds.push(Element)
      }
    })
    setCharactersSelecteds(charactersSeteds)
    console.log(charactersSelecteds)
  }

  function lastPage (){
    setCharactersSelecteds([])
    if(pageNumber > 1){
      setPageNumber(pageNumber - 1) 
    }
  }

  function nextPage(){
    setCharactersSelecteds([])
    if(pageNumber < 42){
      setPageNumber (pageNumber + 1)
    }
  }

  return (
    <div>
      <Nav onHandleKey={selectCharacter} />
      <div className='cardsContainer'>
        {charactersSelecteds.length === 0 ? (
          characters.map((Element, index) => {
            return <Cards
              key={index}
              imgSrc={Element.image}
              name={Element.name}
              origin={Element.origin.name}
              gender={Element.gender}
              episode={Element.episode.length}
              status={Element.status}
            />
          })
        ) : (
            charactersSelecteds.map((Element, index) => {
            return <Cards
              key={index}
              imgSrc={Element.image}
              name={Element.name}
              origin={Element.origin.name}
              gender={Element.gender}
              episode={Element.episode.length}
              status={Element.status}
            />
          })
        )}
      </div>
      <div className='menuPages'>
        <Buttons 
        name="Anterior" 
        onClickButton={lastPage}
        />
        <h2>{pageNumber}</h2>
        <Buttons 
        name="Proxima" 
        onClickButton={nextPage}
        />
      </div>
    </div>
  );
}

export default App;
