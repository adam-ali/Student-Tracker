/**
 * Created by adam on 31/12/16.
 */
import { Field, reduxForm, formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux';

const reducers = {
  // ... your other reducers here ...
  form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);