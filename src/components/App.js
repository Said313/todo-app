import React, {Component} from "react";

import TodoItem from './TodoItem';
import todoData from '../data/todoData';

import '../scss/app.scss';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            todoInfo: todoData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
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

    render(){
        const arrayTodoItems = this.state.todoInfo.map((item)=><TodoItem key = {item.id} todo={item} handleChange = {this.handleChange}/>);
        return (
            <main id = "app">
                <div>
                    {arrayTodoItems}
                </div>
            </main>
        );
    }
}

export default App;
