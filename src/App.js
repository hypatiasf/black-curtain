import './App.css';
import {useState} from "react";
import _ from 'lodash';

function App() {
  const [source, setSource] = useState('');
  const [resultAmount, setResultAmount] = useState(1);
  const [chosen, setChosen] = useState('');

  const buttonOnClickHandler = (event) => {
    event.preventDefault();
    const rows = source.trim().split('\n');
    console.log(rows);

    const results = [];
    for (let amount = 0; amount < resultAmount; amount ++) {
      let result;
      for (let randTimes = 0; randTimes < 32; randTimes++) {
        result = _.sample(rows);
      }
      results.push(result);
    }
    console.log(results);
    setChosen(results.join(','));
  }

  return (
    <div className="App">
      <h1>{chosen}</h1>

      <form className={'source-form'}>
        <textarea className={'source-text'} value={source} onChange={(event => {
          setSource(event.target.value);
        })}/>

        <input type={'number'} value={resultAmount} onChange={(event => {
          setResultAmount(Number.parseInt(event.target.value));
        })} style={{margin: 10}}/>

        <button onClick={buttonOnClickHandler}>Black</button>
      </form>

      <h1>{chosen}</h1>
    </div>
  );
}

export default App;
