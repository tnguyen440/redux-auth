import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import NotFoundPage from './components/404/index';
import PostPage from './containers/PostPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts" component={PostPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="signup" component={SignUpPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
