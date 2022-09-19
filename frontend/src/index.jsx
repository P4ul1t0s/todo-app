import React from "react"
import ReactDOM from "react-dom"
import reducers from "./main/reducers"
import App from './main/app.jsx'
import { applyMiddleware, createStore } from 'redux'
import promise from "redux-promise"
import multi from "redux-multi"
import { Provider } from 'react-redux'

const devTolls = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, promise)(createStore)(reducers, devTolls)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))