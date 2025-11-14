import React, { useContext } from 'react'
import { TodoItemsContext } from '../Store/todo-items-store'

const WelcomeMsg = () => {
 const {todoItems} =  useContext(TodoItemsContext)
  return (
    
    todoItems.length > 0 ? "" : <p className='wlcmMsg'>There is no task. Enjoy your day</p>
  )
}

export default WelcomeMsg