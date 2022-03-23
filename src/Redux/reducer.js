import { REQUEST, SUCCESS } from "./actionTypes"




export const Reducer = (store,action)=>{
    // add the switch statement for different actions
    switch(action.type){
        case SUCCESS:
            return {...store,isLoading:false};
        case REQUEST :
            return {...store,products:action.payload}
        default :
            return {...store}
        
    }
}