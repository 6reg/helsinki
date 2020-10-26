// access react library and state hook
import React, { useState } from 'react';
// use the virtual dom
import ReactDOM from 'react-dom';

// main component recieves anectdotes array elements as a props object
const App = (props) => {
  // desctructured array with current value and function to update current value as it's elements, 0 passed in to initialize current value
  const [selected, setSelected] = useState(0)
  // hook with array of 6 zeros and function to update the values
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  // function assigned to variable that calls set value function of useState hook with argument passed as placeholder for operation you want to perform 
  const setToSelected = (newSelected) => setSelected(newSelected)
  // return random number between length of anecdotes array
  const getRandomNumber = () => Math.floor(Math.random() * 6)
  // passes in random number to update which element of anecdote is displayed randomly  
  const handleNext = () => setToSelected(getRandomNumber)
  // creates copy of current votes array then adds 1 to the currently displayed anecdote, then updates array with the new vote 
  const addVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    return setVotes(votesCopy)
  }
  //  gets element with hightest vote count and displays it's string and value
  const winner = () => {
    let i = votes.indexOf(Math.max(...votes));
    return <div>{props.anecdotes[i]} has {votes[i]} votes</div> 
  }
  // displays current anecdote and it's vote total, button to += element votes and button to get another random element from the array, displays element with highest votes and vote total
  return  (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={addVote}>vote
        </button>
        <button onClick={handleNext}>next anecdote
        </button>
      </div>
      <h2>Anecdote with most votes</h2>
      <div>{winner()}</div>
     </div>
      )
  

}

// object
const anecdotes = [
  'If it hurst, do it more often',
  'Pay attention to monkey mind and subsequent feelings that occur',
  'Spend as much time of each day as possible imersed in learning',
  'Is this action bringing you closer or further from your goals?',
  'Perform in every interaction towards creating positive vibes',
  'Begin it NOW, no matter how small the step..',
]

// passes main component to dom and specifies node entry point 
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
