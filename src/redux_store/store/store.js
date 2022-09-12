import { createStore, applyMiddleware, compose } from 'redux';
import { UserListReducer } from "../reducer/userList_Reducer";
import thunk from 'redux-thunk';
 
const middleware = [thunk];
const store = createStore(
    UserListReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;