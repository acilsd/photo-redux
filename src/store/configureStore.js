import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import comments from '../data/comments';
import posts from '../data/posts';

const initialState = {
  posts,
  comments
};

const logger = createLogger();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
