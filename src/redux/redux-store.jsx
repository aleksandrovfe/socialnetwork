import {createStore, combineReducers, applyMiddleware} from 'redux';
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {findUsersReducer} from "./findUsersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";

const reducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    findUsersReducer: findUsersReducer,
    authReducer: authReducer,
    form: formReducer,
    appReducer: appReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;