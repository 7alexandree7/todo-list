import { useState } from "react";

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) {
            return 
        }
        else {
            setValue('')
            setCategory('')
            addTodo(value, category)
        }
        console.log(value, category)
    }

    return (
        <div className="todo-form">
            <h2>Criar Uma Nova Tarefa</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o Título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option disabled value="">Selecione uma Categoria</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="estudos">Estudos</option>
                </select>

                <input className="input-sbt" type="submit" value="Criar Tarefa" />
            </form>
        </div>
    )
}


export default TodoForm;