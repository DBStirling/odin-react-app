import React from 'react'
import TodoCard from './TodoCard'

// todoList receives the todos array as "props" and sort of initializes it with cost {todos} = props
export default function TodoList(props) {
  const {todos} = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
