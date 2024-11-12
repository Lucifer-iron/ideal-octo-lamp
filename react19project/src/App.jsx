import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function incrementCount() {
    
      setCount((count) => count + 1)
  }

  return (
    <>
     
      <h1>The app</h1>
      <div className="card">

        <button onClick={incrementCount}>
          count is {count}
        </button>
      
      </div>
     
    </>
  )
}

export default App
