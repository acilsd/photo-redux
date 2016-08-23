import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PhotoGrid}/>
    <Route path='/view/:postid' component={Single} />
  </Route>
);
