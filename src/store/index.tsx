import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducers from 'store/modules/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist";

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
