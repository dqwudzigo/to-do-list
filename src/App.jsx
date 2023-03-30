import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      text:'Dawud',
      done:false
    }
  ])

  function handleSubmit(e) {
    e.preventDefault()
    let newTasks = [...tasks, {
      text:'Nermin',
      done:false
    }]
    setTasks(newTasks)
  }

  return (
    
      <div className="wrapper">
    <h2>TO DO LIST</h2>
    <p></p>
    <ul className="plates">
      {
        tasks.map((task, i) => {
          return ( 
            <li key={i}>{task.text}</li>
          )})
      }
    </ul>
    <form onSubmit={handleSubmit} className="add-items">
      <input type="text" name="item" placeholder="Item Name" required/>
      <input type="submit" value="+ Add Item"/>
    </form>
  </div>
   
  )
}

export default App
