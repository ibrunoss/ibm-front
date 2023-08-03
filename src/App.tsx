import * as React from 'react';

import { Card } from './components';
import { type CardState } from './components/Card';
import './style.css';

type User = {name: string; url: string}

export default function App() {
  const [state, setState] = React.useState<CardState>("loading");
  const [user, setUser] = React.useState<User>();


  fetch("https://rickandmortyapi.com/api/character/48")
    .then( r => r.json())
    .then(r => {
      try {

        setUser(() => ({name: r.name, url: r.image}));
        setState(() => "showing");
      } catch {
        throw new Error("Falha ao obter dados");
      }
    })
    .catch(() => setState(() => 'error'));

  return (
    <Card state={state}>
      <div>
        <p>{user?.name}</p>
        <img src={user?.url} alt="Imagem do usuário" width="248px" height="248px" />
      </div>
    </Card>
  );
}
