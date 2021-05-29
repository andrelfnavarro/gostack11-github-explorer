import React from 'react';
import { Dashboard } from 'pages/Dashboard';
import { Repository } from 'pages/Repository';
import { Route, Switch } from 'react-router-dom';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);
