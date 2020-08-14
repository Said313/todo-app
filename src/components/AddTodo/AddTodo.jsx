import React from 'react'
import cx from 'classnames'

import styles from './AddTodo.module.scss'

const AddTodo = ({ isAdding, handlePlusClick, getNewTodo}) => {
    return (
        <div className={cx(styles.container, {[styles.containerActive] : isAdding})}>
            <div className={cx(styles.plus, {[styles.toX] : isAdding})} onClick={handlePlusClick}></div>
            <div className={cx(styles.addContainer, {[styles.addContainerActive] : isAdding})}>
                <div className={cx(styles.blackBack)}></div>

                <form className={cx(styles.todoForm)} onSubmit={getNewTodo}>
                <input 
                    className={cx(styles.todoInput)}
                    type="text"
                    placeholder="Enter To Do"
                />
                <button className={cx(styles.addButton)}>Add</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddTodo