import React from "react";
import ReactDom from "react-dom";

import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./App.js";
import reducer from "./reducer.js";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

const store = createStore(reducer,applyMiddleware(ReduxThunk,logger));
ReactDom.render(
<Provider store = {store}>
   <App></App>
</Provider>
,
 document.querySelector('#root')
)