import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [done, setDone] = useState("")
  const [tasks, setTasks] = useState([
  ])

  function handleSubmit(e) {
    e.preventDefault()
    let newTasks = [...tasks, {
      text,
      done:false
    }]
    setTasks(newTasks)
    setText("")
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
    <form onSubmit={handleSubmit} className="addItems">
      <input onChange={(e)=> setText(e.target.value)} value={text} type="text" name="item" placeholder="Item Name" required/>
      <input type="submit" value="+ Add Item"/>
    </form>
  </div>
   
  )
}

export default App
