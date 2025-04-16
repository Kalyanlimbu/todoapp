import Form from './Form'
import TodoList from './TodoList'
import { useState } from 'react'

export default function Todo () {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
