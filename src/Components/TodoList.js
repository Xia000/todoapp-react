import React from "react";
import Todo from "./Todo";


const TodoList = ({todos,setTodos, filterHandler}) => {
    
    
    return(
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo setTodos = {setTodos}  todos = {todos} text = {todo.text} key={todo.id} todo={todo} />
                     )) }
                </ul>
            </div>
        </div>
    );
}

export default TodoList;