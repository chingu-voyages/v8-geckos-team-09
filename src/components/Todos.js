import React from 'react';
import '../style/Todos.css';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    
    constructor(props){
        super(props);
    
        this.state = {
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    addTodo(event) {
        event.preventDefault();

        const newTodos = [...this.state.todos];

        newTodos.push({
            id: this.state.todos.length + 1,
            text: this.refs.search.value,
            completed: false
        });

        this.setState({
            todos : newTodos
        });

        this.refs.search.value = ''
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    
    render(){

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} deleteTodo={this.deleteTodo}/>)

        return(
            <div className='todos-container'>
                <h2>Todos</h2>
                <form className="todo-form" onSubmit={this.addTodo}>
                    <input className="todo-input" type="text" ref="search" placeholder="add todo..."></input>
                    <button className="todo-button">+</button>
                </form>
                {todoItems}
            </div>
        )
    }
}

export default Todos;
