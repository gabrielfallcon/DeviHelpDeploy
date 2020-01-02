import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login     from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewHelp   from './pages/NewHelp'
import NotFound from './pages/NotFound'

import Register from './pages/Login/Register'
import Singin   from './pages/Login/Singin'
import Option   from './pages/Login/Option'


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact    component={Login}/> */}
                <Route path="/" exact    component={Singin}/>
                <Route path="/register"  component={Register}/>
                <Route path="/option"    component={Option}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new"       component={NewHelp}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}