import React from 'react'

import { Todo } from '../../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

import './TodoCard.css'


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todo__card">
      <span className="todo__card--text">{todo.todo}</span>

      <div className="todo__card--icons">
        <span className="todo__card--icon"><AiFillEdit /></span>
        <span className="todo__card--icon"><MdDone /></span>
        <span className="todo__card--icon"><AiFillDelete /></span>
      </div>
    </form>
  )
}

export default TodoCard