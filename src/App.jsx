import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {        // main react app runs this function as its called in the main.jsx

  // Creating stateful todos variable which makes it user-editable
  const [todos, setTodos] = useState([
  
  ])

  // Creates a new todo list array. Lists all existing elements already, then
  // adds the newTodo which is passed through the function parameter.
  // Sets Todos to equal the newTodoList
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {

  }

  return ( 
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />    
    </>
  )
}

export default App
