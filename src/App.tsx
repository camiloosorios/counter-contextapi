import { useCounter } from "./hooks/useCounter"

function App() {

  const { state, dispatch } = useCounter();

  return (
    <>
      <h1>Hola mundo</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}

export default App
