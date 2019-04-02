import React from "react";

function TodoItem(props) {
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
            <button
                onClick={() => props.deleteTodo(props.item.id)}
            >
                delete
            </button>
        </div>
    )
}

                

export default TodoItem;