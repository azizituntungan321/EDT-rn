import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import { SearchList } from './Reducers/SearchList/SearchListReducer';
import { SearchDetail } from './Reducers/SearchDetail/SearchDetailReducer';

const middleware = [thunk];

if (__DEV__) {
  middleware.push(reduxLogger);
}

const appReducer = combineReducers({
  searchList: SearchList,
  searchdetail: SearchDetail,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(...middleware));

export { store };
