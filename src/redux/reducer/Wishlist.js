import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value :[],
    count: 0,

}

const wishlist = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        ADD_TO_WISHLIST: (state,action)=>{
            const val = state.value.find((addto ) => addto.id === action.payload.id)
            if(!val){
                return {
                    ...state,
                    value : [...state.value,{...action.payload}]
                }
            }
            return state;
        },
        REMOVE_TO_WISHLIST: (state,action)=>{
            return {
                ...state,
                value:state.value.filter((remove)=> remove.id !== action.payload.id),
            }
        },
        addCount:(state)=>{
            return {...state, count:state.value.length}
        }
    }
})

export default wishlist.reducer;
export const {ADD_TO_WISHLIST, addCount, REMOVE_TO_WISHLIST} = wishlist.actions;