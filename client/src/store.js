import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define initial state
const initialState = {
  isLoggedIn: false,
  userType: null,
  userId: null,
  cart: [],
};

// Define reducer function to handle state changes
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userType: action.userType,
        userId: action.userId,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userType: null,
        userId: null,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.productId],
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.cart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.productId),
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
