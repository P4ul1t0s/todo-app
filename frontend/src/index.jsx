import React from "react"
import ReactDOM from "react-dom"
import reducers from "./main/reducers"
import App from './main/app.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const devTolls = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTolls)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))