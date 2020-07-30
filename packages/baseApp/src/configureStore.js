import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  // ...options
});
import rootReducer from './state';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
