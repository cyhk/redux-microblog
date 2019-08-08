import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, /*combineReducers*/ } from "redux";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import reduceReducers from 'reduce-reducers';
// import microblogReducer from "./microblogReducer";
import { BrowserRouter } from "react-router-dom";

const INITIAL_STATE = {
  posts: { byId: {}, allIds: [] },
  comments: { byId: {}, allIds: [] }
};

// const microblogReducer = combineReducers({ postReducer, commentReducer });
const microblogReducer = reduceReducers(INITIAL_STATE, postReducer, commentReducer);

const store = createStore(microblogReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());
  
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
