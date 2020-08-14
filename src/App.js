import React, {Component} from "react"
// import cx from 'classnames'

import TodoItem from './components/TodoItem/TodoItem.jsx'
import styles from './App.module.scss'
import AddTodo from "./components/AddTodo/AddTodo.jsx"

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            isAdding: false,
            todoInfo: [],
            count: 0
        }
    }

    handleChange = id => {
        this.setState((prevState) => {
            return {
                todoInfo: prevState.todoInfo.map(item => {
                    if(item.id !== id){
                        return item
                    } else {
                        item.completed = !item.completed
                        return item
                    }
                })
            }
        })
    }

    handlePlusClick = () => {
        this.setState(prevState => {return {isAdding: !prevState.isAdding}})
    }

    getNewTodo = (event) => {
        event.preventDefault()

        const newTodoText = event.target.querySelector('input').value
        if(newTodoText.length > 0){
            event.target.querySelector('input').value = ''

            this.setState(prevState => {
                const newTodosArray = [...prevState.todoInfo]
                newTodosArray.unshift({
                    id: prevState.count + 1,
                    text: newTodoText,
                    completed: false
                })

                return {
                    isAdding: false,
                    count: prevState.count + 1,
                    todoInfo: newTodosArray
                }
            })
        }
    }

    render(){
        const arrayTodoItems = this.state.todoInfo.map((item)=><TodoItem key = {item.id} todo={item} handleChange = {this.handleChange}/>);
        return (
            <div className={styles.container}>
                <AddTodo 
                    isAdding={this.state.isAdding} 
                    handlePlusClick={this.handlePlusClick}
                    getNewTodo={this.getNewTodo}
                />

                <main className={styles.main}>
                    <div className={styles.mainContents}>
                        {arrayTodoItems}
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
