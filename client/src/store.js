import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define initial state
const initialState = {
  isLoggedIn: false,
  userType: null,
};

// Define reducer function to handle state changes
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userType: action.userType,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userType: null,
      };
    default:
      return state;
  }
}

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Persist the store
const persistor = persistStore(store);

export { store, persistor };
