import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {AuthActionsType, loginReducer} from "./loginReducer";
import {registerReducer} from "./registerReducer";
import {profileReducer} from "./profileReducer";
import {passwordReducer} from "./passwordReducer";
import {appReducer} from "./appReducer";
import {CardsPackActionsType, cardsPackReducer} from "./cardsPackReducer";
import {CardsActionsType} from "./cardsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    register: registerReducer,
    profilePage: profileReducer,
    recovery: passwordReducer,
    cardsPack: cardsPackReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// все типы экшенов для App
export type AppActionsType = AuthActionsType | CardsPackActionsType | CardsActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;