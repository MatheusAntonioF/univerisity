import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/students" component={() => <h1>students</h1>} />
          <Route path="/offeredClass" component={() => <h1>offeredClass</h1>} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
