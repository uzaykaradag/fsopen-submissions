import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet</p>
      </div>
    )
  }

  return(
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text='Good' value={good}/>
      <StatisticsLine text='Neutral' value={neutral}/>
      <StatisticsLine text='Bad' value={bad}/>
      <StatisticsLine text='Total' value={total}/>
      <StatisticsLine text='Average Score' value={average}/>
      <StatisticsLine text='Positive (%)' value={positive}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
  }

  let total = good + neutral + bad
  let average = total ? (good - bad) / total : 0
  let positive = total ? (good / total) * 100 : 0  // multiply by 100 for percentage

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <Button onClick={incrementGood} text='good'/>
      <Button onClick={incrementNeutral} text='neutral'/>
      <Button onClick={incrementBad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
    </div>
  )
}


export default App