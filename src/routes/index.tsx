import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import OrphanageCreate from '../pages/OrphanageCreate';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/app" exact component={OrphanagesMap} />

    <Route path="/orphanages/:id" exact component={Orphanage} />
    <Route path="/orphanages/create" exact component={OrphanageCreate} />
  </Switch>
);

export default Routes;
