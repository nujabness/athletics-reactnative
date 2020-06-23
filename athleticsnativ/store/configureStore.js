import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/app";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	form: formReducer,
	app: appReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))

);

