import React from 'react';

import './TodoList.css';

import FlipMove from 'react-flip-move';

export default function TodoList(props){

    const allTodos = props.allTodos;
    const SingleTodo = allTodos.map(todo => {
        return(
            <div className="list" key={todo.key}>
                <p className="shadow hoverable">
                    <input type="text" value={todo.text} id={todo.key} onChange={(e)=>props.updateTodo(e.target.value, todo.key)} />
                    <span className="deleteIcon fa fa-trash" onClick={()=>{props.deleteTodo(todo.key)}}></span>
                </p>
            </div>
        )
    })
    return(
        <>
            <div>
                <FlipMove>
                    {SingleTodo}
                </FlipMove>
            </div>
        </>
    )
}