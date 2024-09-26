import { useState } from "react"

export default function TodoInput(props) {
    const {handleAddTodos, setTodoValue, todoValue} = props
    // Creates todoValue stateful variable and assigns empty string as default value

    return (
        <header>

            <input value={todoValue} onChange={(e)=> {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />

            <button onClick={()=> {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>

        </header>
    )
}