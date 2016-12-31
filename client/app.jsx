import React from 'react'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Router, Route, Link, hashHistory } from 'react-router'
import Index from './pages/index.jsx'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'
import ReactDOM from 'react-dom';
import main from './reducers/reducer';
const reducers = {
  main,
  form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

var App = React.createClass({
    render: function () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={SignIn}/>
            </Router>
        )
    }
});
ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
