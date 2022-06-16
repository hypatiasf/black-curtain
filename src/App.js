import './App.css';
import {useState} from "react";
import _ from 'lodash';

function App() {
  const [source, setSource] = useState('');
  const [chosen, setChosen] = useState('');

  const buttonOnClickHandler = (event) => {
    event.preventDefault();
    const rows = source.split('\n');
    console.log(rows);

    const result = _.sample(rows);
    setChosen(result);
  }

  return (
    <div className="App">
      <h1>{chosen}</h1>

      <form className={'source-form'}>
        <textarea className={'source-text'} value={source} onChange={(event => {
          setSource(event.target.value);
        })}/>

        <button onClick={buttonOnClickHandler}>Black</button>
      </form>

      <h1>{chosen}</h1>
    </div>
  );
}

export default App;
