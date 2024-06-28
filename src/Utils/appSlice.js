import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        showMenu:(state)=>{
            state.isMenuOpen=false;
        }
    },
});

export const {toggleMenu,showMenu} = appSlice.actions;
export default appSlice.reducer;  