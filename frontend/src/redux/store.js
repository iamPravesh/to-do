// create a redux store
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import uiReducer from "./uiSlice";

const persistConfig = {
    key: "items",
    storage
}

const reducer = combineReducers({
    ui: uiReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
});