import React from 'react'
import cx from 'classnames'

import styles from './TodoItem.module.scss'

const TodoItem = ({todo, handleChange}) => {

    return (
        <div className={styles.todoItem}>
            <input 
                type="checkbox" 
                checked = {todo.completed} 
                onChange = {() => handleChange(todo.id)}
                className = {styles.todoCheckbox}
                />
            <p 
                className={cx(
                    styles.defaultText, 
                    {[styles.completedText] : todo.completed}
                )}
            >{todo.text}</p>

        </div>
    )
}

export default TodoItem
