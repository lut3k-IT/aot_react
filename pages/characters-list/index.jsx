import React from 'react';

import charactersJSON from '../../src/data/characters.json';

export default function Characters() {
  const characters = charactersJSON;

  // useEffect(() => {

  // }, [])

  return (
    <div>
      {characters.map((ch) => {
        return <p key={ch.id}>{ch.first_name}</p>
      })}
    </div>
  )
}
