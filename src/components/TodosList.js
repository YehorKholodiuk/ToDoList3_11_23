import React from 'react';

const TodosList = (todos, setTodos, setEditTodo) => {

    const handleComplete = (todo) => {
    setTodos(
        todos.map (item => {
            if (item.id === todo.id){
                return {...item, completed: !item.completed}
            } return item
        })
    )
    }

    const handleEdit = ({id})=> {
        const findTodo = todos.find ( todo => todo.id === id )
        setEditTodo(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodos (todos.filter(todo => todo/id !== id))
    }


    return (
        <div>
            {todos.map(todo => (
                <li className = "list-item" key= {todo.id}>
<input type = "text"
       value={todo.title}
/>
                    <button className = "button-complete- task-button" onClick={() => handleComplete(todo)}>Complete</button>
                    <i className="fa fa-check-circle"></i>
                    <button className = "button-edit- task-button" onClick={() => handleEdit}></button>
                    <i className="fa fa-edit"></i>
                    <button className = "button-delete- task-button" onClick={() => handleDelete(todo)}></button>
                    <i className="fa fa-trash"></i>

                </li>
            ))}
        </div>
    );
};

export default TodosList;
