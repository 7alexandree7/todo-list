import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {

  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('Asc')

  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar Funcionalidade do Sistema',
      category: 'Trabalho',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false
    },
  ])


  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id != id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        {todos
          .filter((todo) =>
            filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted
          )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) =>
            sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <TodoList completeTodo={completeTodo} removeTodo={removeTodo} key={todo.id} todo={todo} />
          ))}

      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App;
