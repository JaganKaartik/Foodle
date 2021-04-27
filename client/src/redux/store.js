import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, devTools);

export default store;
