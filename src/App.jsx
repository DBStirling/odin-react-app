import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  // Creating stateful todos variable which makes it user-editable
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
    newList }))
  }

  // Creates a new todo list array. Lists all existing elements already, then
  // adds the newTodo which is passed through the function parameter.
  // Sets Todos to equal the newTodoList
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  function handleClearTodo() {
    const clearedTodoList = []
    setTodos(clearedTodoList)
  }

// since the dependancy array is empty, this useEffect function will run
  // any time that the window refreshes
  useEffect(()=> {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return ( 
    <>
      <TodoInput handleClearTodo={handleClearTodo} todoValue={todoValue} 
                setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>

      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />    
    </>
  )
}

export default App
