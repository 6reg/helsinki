
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  const { text, value } = props
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = (props) => {
  const { good, bad, neutral } = props
  if (good + bad + neutral === 0) return (<h2>no stats</h2>);
  return (
    <div><table><tbody>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good + neutral + bad) / 3} />
      <Statistic text="positive" value={100 * good / (good + neutral + bad) + '%'} />
    </tbody></table>
    </div>
  )
}

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div >
  )

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
