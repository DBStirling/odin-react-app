import React from 'react'

export default function todoCard() {
  return (
    <li className='todoItem'>
      <div className='actionsContainer'>
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  )
}