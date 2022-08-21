import { Router, Route, Redirect, hashHistory } from 'react-router'
import React from "react";
import Todo from "../todo/todo.jsx";
import About from "../about/about.jsx";

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}></Route>
        <Route path='/about' component={About}></Route>
        <Redirect from='*' to='/todos'></Redirect>
    </Router>
)