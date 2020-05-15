import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Historico from './pages/Historico';
import Login from './pages/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/historico" component={Historico} />
            </Switch>
        </BrowserRouter>
    );
}
