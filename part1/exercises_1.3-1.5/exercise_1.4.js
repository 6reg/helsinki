// Part1 Exercises 1.4:

import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      < div >{props.parts[0].name} {props.parts[0].exercises}</ div>
      < div >{props.parts[1].name} {props.parts[1].exercises}</ div>
      < div >{props.parts[2].name} {props.parts[2].exercises}</ div>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return < div > Total number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</div >

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
