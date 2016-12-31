// import { createStore, combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
//
// const reducers = {
//   // ... your other reducers here ...
//   form: formReducer     // <---- Mounted at 'form'
// };
// const reducer = combineReducers(reducers);
// const store = createStore(reducer);

import * as types from '../actionTypes';
import _ from 'lodash';
// import * as calculate from './calculationFuctions';
export const initialState = {
  teachers: [],
  students: []
};
export default function reducer (state = initialState, action) {

  var newState = _.cloneDeep(state);
  switch (action.type) {
    case types.ADD_PRODUCT: {
      return newState;
    }
    default: return state;
  }
}
