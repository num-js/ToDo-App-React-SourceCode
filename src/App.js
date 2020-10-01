import React, { Component } from 'react';

import TodoList from './TodoList';

import './App.css';

export default class App extends Component{
    constructor(){
        super();
        
        this.state = {
            allTodos: [{ text: "This is React Project", key: 1591173026008 }, {text: "Tasks are not Save in DB", key: 1591173124099}, { text: "New Task", key: 1591173026001 } ],
            currentTodo: {
                text: '',
                key: ''
            }
        }
    }

    inputHandeler = (event) => {
        this.setState({
            currentTodo: {
                text: event.target.value,
                key: Date.now()
            }
        })
    }

    saveTodo = (event) => {
        event.preventDefault();
        const currentTodo = this.state.currentTodo;
        if(currentTodo.text !== ''){
            this.setState({
                allTodos: [currentTodo, ...this.state.allTodos],
                currentTodo: {
                    text: '',
                    key: ''
                }
            })
            console.log(this.state.allTodos);
        }
    }

    updateTodo = (updatedText, key) => {
        const allTodos = this.state.allTodos;
        allTodos.map((todo) => {
            if(todo.key === key){
                todo.text = updatedText;
            }
        })

        this.setState({
            allTodos: allTodos
        })
    }

    deleteTodo = (key) => {
        const filteredTodo = this.state.allTodos.filter(todo => todo.key !== key);
        this.setState({
            allTodos: filteredTodo
        })
    }

    render(){
        return(
            <>
                <div align="" className="container col-lg-3 col-md-8 col-sm-12 shadow">
                    <div className="secJumbotron shadow">
                        <form id="to-do-form" onSubmit={this.saveTodo}>
                            <input type="text" placeholder="ToDo..." value={this.state.currentTodo.text} onChange={this.inputHandeler} />
                            <button type="submit"><span className="fa fa-plus"></span> Add</button>
                        </form>
                        <div className="">
                            <TodoList allTodos={this.state.allTodos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
