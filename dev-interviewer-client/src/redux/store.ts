import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isProductionEnv } from '../helpers/environmentHelpers';
import reducers from './reducers';

const middlewares = [thunk];

const composeEnhancers = isProductionEnv
  ? applyMiddleware(...middlewares)
  : composeWithDevTools(applyMiddleware(...middlewares));

const DEFAULT_STORE_STATE = {
  tagsStore: {
    tags: [],
  },
};

const store = createStore(
  reducers,
  DEFAULT_STORE_STATE as any,
  composeEnhancers,
);

export default store;
