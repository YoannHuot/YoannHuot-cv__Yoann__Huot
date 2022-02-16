import { createStore, combineReducers } from "redux";
import { incrementProduct } from "./Basket/reducer";
import { showProduct } from "./ShowPages/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
	key: "increment",
	storage
};
const persistConfig2 = {
	key: "product",
	storage
};

const persistedReducerIncrement = persistReducer(persistConfig, incrementProduct);
const persistedReducerShow = persistReducer(persistConfig2, showProduct);

export const store = createStore(
	combineReducers({
		persistedReducerIncrement,
		persistedReducerShow
	}),
	composeWithDevTools()
);

export const persistor = persistStore(store);
