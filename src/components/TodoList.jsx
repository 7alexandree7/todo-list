const TodoList = ({ todo, removeTodo, completeTodo }) => {

    return (
        <div className='todo' style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <div className='content-todo'>
                <p>{todo.text}</p>
                <p>({todo.category})</p>
            </div>
            <div className='btn-content'>
                <button onClick={() => completeTodo(todo.id)} className="complete">Completar</button>
                <button onClick={() => removeTodo(todo.id)} className="remove">X</button>
            </div>
        </div>
    )
}

export default TodoList