//Part1 Exercises 1.3: course information step3

import React from 'react'; import ReactDOM from 'react-dom';

const Header = (props) => { console.log(props) return

{props.course}
}
const Content = (props) => { console.log(props) return < div > {props.name} {props.exercises}</ div>

}

const Total = (props) => { console.log(props) return < div > Total number of exercises {props.exercises}

}

const App = () => { const course = 'Half Stack application development' const part1 = { name: 'Fundamentals of React', exercises: 10 } const part2 = { name: 'Using props to pass data', exercises: 7 } const part3 = { name: 'State of a component', exercises: 14 }

return (

<Total exercises={part1.exercises + part2.exercises + part3.exercises} />
) }
ReactDOM.render(, document.getElementById('root'))
