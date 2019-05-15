import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import debounce from 'lodash/debounce';
import { loadState, saveState } from 'localStoreage';
import AppContainer from 'containers/AppContainer';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(debounce(() => {
  saveState({
    showRandomHouse: store.getState().showRandomHouse,
  });
}, 500));
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
