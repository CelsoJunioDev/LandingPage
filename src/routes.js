import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Initial from './pages/Initial'

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Initial}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;