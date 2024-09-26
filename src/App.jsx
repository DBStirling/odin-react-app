import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {        // main react app runs this function as its called in the main.jsx

  const [todos, setTodos] = useState([
    'go to the gym',
    'eat more fruits and veg',
    'pick up the kids'
  ])

  return ( 
    <>
      <TodoInput />
      <TodoList todos={todos} />    
    </>
  )
}

export default App
