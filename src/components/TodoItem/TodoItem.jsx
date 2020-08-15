import React, { useState } from 'react'
import cx from 'classnames'

import styles from './TodoItem.module.scss'

const TodoItem = ({todo, handleChange, handleDelete}) => {
    const [ mouseOver, setMouseOver ] = useState(false)

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

            <i  className={cx("fa fa-trash", 
                            styles.trashBin,
                            {[styles.trashBinAppear] : todo.completed},
                            {[styles.trashBinHovered] : mouseOver},
                            )} 
                aria-hidden="true"
                onMouseOver={() => setMouseOver(true)}
                onMouseOut={() => setMouseOver(false)}
                onClick={handleDelete(todo.id)}
                ></i>

        </div>
    )
}

export default TodoItem
