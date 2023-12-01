import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {  contactReducer } from './reducer/ContactReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
