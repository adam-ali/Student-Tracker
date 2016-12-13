import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import Index from './pages/index.jsx'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'
import ReactDOM from 'react-dom';


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
ReactDOM.render(<App />, document.getElementById('app'));