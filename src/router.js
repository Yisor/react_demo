import { Router, Route, hashHistory } from 'react-router'
import React from 'react'

import Login from './page/login/NormalLoginForm'
import UserInfo from './page/userinfo'
import Ques from './page/ques'
import Result from './page/result'

export default class extends React.Component{
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}></Route>
                <Route path='/ques' component={Ques}></Route>
                <Route path='/result' component={Result}></Route>
                <Route path='/user' component={UserInfo}></Route>
                <Route path='*' component={Login} />
            </Router>
        )
    }
}
