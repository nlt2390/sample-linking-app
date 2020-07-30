import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './state';

function createReducer(asyncReducers) {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers,
  });
}
const logger = createLogger({
  // ...options
});

const store = createStore(createReducer(), applyMiddleware(logger, thunk));

store.asyncReducers = {};
store.injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export default store;
