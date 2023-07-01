const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age="17"/>

      <Hello name="Daisy" age="21"/>
      <Hello name="Uzay" age="23"/>
    </>
  )
}

export default App