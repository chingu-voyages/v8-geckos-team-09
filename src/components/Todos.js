import React from 'react';
import '../style/Todos.css';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    
    constructor(props){
        super(props);
    
        this.state = {
            todos: [
                {
                    id: 1,
                    text: "Take out the trash",
                    completed: true
                },
                {
                    id: 2,
                    text: "Grocery shopping",
                    completed: false
                },
                {
                    id: 3,
                    text: "Clean gecko tank",
                    completed: false
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
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
        console.log(event.target.value)
    }
    
    render(){

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return(
            <div className='todos-container'>
                <form onSubmit={this.addTodo}>
                    <input placeholder="add todo..."></input>
                    <button>Submit</button>
                </form>
                {todoItems}
            </div>
        )
    }
}

export default Todos;
