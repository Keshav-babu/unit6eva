// import { applyMiddleware, createStore } from "redux";
// import { reducer } from "./reducer";

import { createStore } from "redux"
import { Reducer } from "./reducer"

// import thunk from 'redux-thunk'
// export const store = createStore(reducer,applyMiddleware(thunk))
//i Dont know thunk I will do it by reading docs but now I have less time
const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const store=createStore(Reducer,initState)


if (window.Cypress) {
    window.store = store
  }
