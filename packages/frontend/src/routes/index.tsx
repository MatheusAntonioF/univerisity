import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Students from '../pages/Students';
import OfferedClass from '../pages/OfferedClass';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/students" component={() => <Students />} />
          <Route path="/offeredClass" component={() => <OfferedClass />} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
