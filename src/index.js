import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import author from "./store/reducers/author";
import authors from "./store/reducers/authors";
import App from "./App";

const rootReducer = combineReducers({
  rootAuthor: author,
  rootAuthors: authors
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
