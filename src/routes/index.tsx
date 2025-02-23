import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import OrphanageCreate from '../pages/OrphanageCreate';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/app" component={OrphanagesMap} />
    <Route path="/orphanages/create" component={OrphanageCreate} />
    <Route path="/orphanages/:id" component={Orphanage} />
  </Switch>
);

export default Routes;
