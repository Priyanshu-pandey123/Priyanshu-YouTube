import { createSlice } from "@reduxjs/toolkit";
import { COUNT     } from "./constant";



const chatSlice=createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addChat:(state,action)=>{
            state.message.splice(COUNT,1);
            state.message.unshift(action.payload);
        }
    }
});



export const {addChat}=chatSlice.actions;
export default chatSlice.reducer;