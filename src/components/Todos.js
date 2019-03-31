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
    
    render(){

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return(
            <div className='todos-container'>
                <form onSubmit={this.addTodo}>
                    <input type="text" ref="search" placeholder="add todo..."></input>
                    <button>Submit</button>
                </form>
                {todoItems}
            </div>
        )
    }
}

export default Todos;
