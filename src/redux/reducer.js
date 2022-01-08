import { combineReducers } from "redux";

// Reducers
import exampleReducer from "store/example/reducer";
import authReducer from "store/auth/reducer";

const reducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
});

export default reducer;
