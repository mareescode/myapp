import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
    number:0,
    quantity:null,
    total:null,
}
    

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
           state.value=[...state.value,action.payload]
           state.number+=1
          },
          increment: (state,action) => {
                state.quantity+=1
                state.total+=action.payload    
          },
          decrement: (state,action) => {
            state.quantity -= 1
            state.total -=action.payload
          },
          remove:(state,action)=>{
          state.value=action.payload
          state.number-=1
          }
          }    
    }
)

export const {add,increment,decrement,remove} = cartSlice.actions;
export default cartSlice.reducer;