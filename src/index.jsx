import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import debounce from 'lodash/debounce';
import rootReducer from 'reducers';

import rootSaga from 'sagas';
import { loadState, saveState } from 'localStoreage';
import AppContainer from 'containers/app-container';

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

store.subscribe(debounce(() => {
  saveState({
    showRandomHouse: store.getState().showRandomHouse,
    peopleList: store.getState().peopleList,
  });
}, 500));
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
