import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

const App = () => {
    return (
        <div style={{ height: '100%' }}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={AuthPage} />
                <Route exact path="/register" component={AuthPage} />
            </Switch>
        </div>
    );
};

export default App;
