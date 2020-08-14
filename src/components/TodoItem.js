import React from 'react';

import '../scss/todoItem.scss';

function TodoItem(props){
    const completedStyle = {
        textDecoration: 'line-through',
        color: '#4c4c4c',
        fontStyle: "oblique"
    }

    return (
        <div>
            <input type="checkbox" checked = {props.todo.completed} onChange = {() => props.handleChange(props.todo.id)} />
            <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
        </div>
    );
}

export default TodoItem
