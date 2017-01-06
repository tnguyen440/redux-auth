import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {browserHistory, Router} from 'react-router';
import routes from './routes';

//import {fetchPosts} from './actions/postActions';

injectTapEventPlugin();

const store = configureStore();
//store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
