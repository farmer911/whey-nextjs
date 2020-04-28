import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import nextReduxWrapper from 'next-redux-wrapper';
import rootReducer from './rootReducer';


export function configureStore(initialState = {}) {
  let store = {};
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
}


export default function (BaseComponent) {
  return nextReduxWrapper(configureStore)(BaseComponent)
}