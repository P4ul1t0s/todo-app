import React, {Component} from "react";
import axios from "axios";
import PageHeader from "../template/pageHeader.jsx";
import TodoForm from "./todoForm.jsx";
import TodoList from "./todoList.jsx";

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
        
    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => console.log('funcionou'))
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange}></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}