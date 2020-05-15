import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Historico from './pages/Historico';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Historico} />
                <Route path="/historico" component={Historico} />
            </Switch>
        </BrowserRouter>
    );
}
