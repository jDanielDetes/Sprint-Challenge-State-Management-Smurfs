import { FETCHING_ACTIVITY_SUCCESS } from "../components/actions"

const initialState={
    name:"",
    age:"",
    height:"",
    error:""
}

export const reducer=(state= initialState,action) =>{
    switch(action.type){
        case FETCHING_ACTIVITY_SUCCESS:
            return {
                ...state,name:action.payload
            }
            default: return state 
    }
}