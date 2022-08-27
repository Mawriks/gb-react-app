import { useState } from 'react';
import { ChangeMode } from '../components/ChangeMode/ChangeMode';
import { ChangeName } from '../components/ChangeName/ChangeName';
import { Header } from '../components/Header/Header';
import './App.css';

const list = [1,2,3,4,5];

export function App() {
  const [name, setName] = useState('Max'); 
  const [mode, setMode] = useState(true);

  const changeName = (name) => {
    setName(name);
  };

  const changeMode = () => {
    setMode(prev => !prev);
  };

  return (
    <div className={ `App ${ mode ? 'app-dark' : 'app-light' }` }>
      <ChangeMode mode={ mode } modeSetter={ changeMode }/>
      <Header name={ name } />
      <ChangeName nameSetter={ changeName } />
      <br/>
      <hr/>
      <br/>
      <ul>
        {list.map((item, index)=> <li key={ index }>{ item }</li>)}
      </ul>
    </div>
  );
}
