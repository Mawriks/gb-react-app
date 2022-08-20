import { useState } from 'react';
import ChangeMode from '../components/ChangeMode/ChangeMode';
import ChangeName from '../components/ChangeName/ChangeName';
import Header from '../components/Header/Header';
import './App.css';


function App() {
  const list = [1,2,3,4,5];
  const [name, setName] = useState('Max'); 
  const [mode, setMode] = useState(true);

  return (
    <div className={ `App ${mode ? 'app-dark' : 'app-light' }` }>
      <ChangeMode mode={mode} modeSetter={setMode}/>
      <Header name={name} />
      <ChangeName nameSetter={setName} />
      <br/>
      <hr/>
      <br/>
      <ul>
        {list.map((item, index)=> <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
