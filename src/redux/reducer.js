import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

const initialState=[];

export const reducer = (state=initialState,action)=> {
    switch(action.type){
        case ADD_TO_CART:
            console.log("state", state);
            console.log("action", action.data);
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            let result = state.filter(item=> {
                console.log("result",item.name);
                console.log("initialState",state);
                console.log("result",action.data);
                return item.name!=action.data
            })
            console.log("result", result);
            return [
                ...result
            ]
        default :
            return state
    }
}