import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
