import React, { useState } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
import NavBarForCharacterPage from "./NavBarForCharacterPage";


const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState('');
  const characters = useCharacters(page, characterName);

  return (
    <>
      <>
        <NavBarForCharacterPage onSerachbarValueChange={setCharacterName}/>
      </>
      {characters === "Loading..." ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="character-container">
            {characters.results.map((character, index) => (
              
              <Character 

                key={index}
                index={index}
                name={character.name}
                gender={character.gender}
                image={character.image}
                originName={character.origin.name}
                locationName={character.location.name}
                statuso={character.status}
                species={character.species}
                
              />
              
            ))}
          </div>
          <div className="buttons-character-page">
          {page === 1 ? (
            <button 
              className="btn btn-outline-light" disabled
            >
              {"￩ Prev"}
            </button>
          ) : (
            <button
              onClick={() => setPage(page - 1)}
              className="btn btn-outline-light"
            >
              {"￩ Prev"}
            </button>
          )}
          {characters.info.pages === page ? (     
            <button 
              className="btn btn-outline-light" disabled
            >
              {"Next ￫"}
            </button>
          ) : (
            <button
              onClick={() => setPage(page + 1)}
              className="btn btn-outline-light"
            >
              {"Next ￫"}
            </button>
          )}
          </div>
        </>
      )}
    </>
  );
};

export default CharacterList;
