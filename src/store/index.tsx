import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducers from 'store/modules/rootReducer';
import thunk from 'redux-thunk';
import { getFirebase } from "react-redux-firebase";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk.withExtraArgument(getFirebase)];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
