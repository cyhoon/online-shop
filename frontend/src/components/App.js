import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CategoryPage from './pages/CategoryPage';

const App = () => {
    return (
        <div style={{ height: '100%' }}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={AuthPage} />
                <Route path="/register" component={AuthPage} />
                <Route path="/category" component={CategoryPage} />
            </Switch>
        </div>
    );
};

export default App;
