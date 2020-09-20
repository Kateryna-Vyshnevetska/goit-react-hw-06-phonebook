import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { phoneBookReducer, errors } from "./phoneBook/reducers";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["error"],
};

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  errors: errors,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
persistStore(store);
