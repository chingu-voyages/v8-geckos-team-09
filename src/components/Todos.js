import React from 'react';
import '../style/Todos.css';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    render(){
        return(
            <div className='todos-container'>
                <TodoItem />
                <TodoItem />
            </div>
        )
    }
}

export default Todos;
