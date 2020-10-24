import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
};

const Stat = ({ text, mood }) => {
  return <div>{text}{mood}</div>
}

const Stats = ({ good, neutral, bad }) => {
  let all = good + bad + neutral;
  let average = (all === 0) ? 0 : Math.round(all / 3);
  let positive = (all === 0) ? 0 : Math.round((good / all) * 100);

  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  };

  return (
    <div>
      <Stat text='good' mood={good} />
      <Stat text='neutral' mood={neutral} />
      <Stat text='bad' mood={bad} />
      <Stat text='average' mood={average} />
      <Stat text='positive' mood={positive + '%'} />
    </div>
  )
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const addOne = (setter, mood) => () => setter(mood + 1);

    return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={addOne(setGood, good)} text='good' />
        <Button onClick={addOne(setNeutral, neutral)} text='neutral' />
        <Button onClick={addOne(setBad, bad)} text='bad' />
      <h1>stats</h1>
        <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
