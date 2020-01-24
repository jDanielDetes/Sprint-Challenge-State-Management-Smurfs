import { FETCHING_SMURF_SUCCESS } from "../components/actions"

export const initialState={
    smurf:[{}]
}

export const reducer=(state= initialState,action) =>{
    switch(action.type){
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,smurf:action.payload
            }
            default: return state
    }
}