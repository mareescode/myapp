import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos=createAsyncThunk('fetchTodos',async()=>{
  const response=await fetch("http://localhost:3000/employee");
  return response.json()
});


const initialState={
  isLoading:false,
  data:[],
  isError:false,
}
const userSlice=createSlice({
    name:"users",
    initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchTodos.pending,(state,action)=>{
        state.isLoading=true;
    })
    builder.addCase( fetchTodos.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.isLoading=true;
    })
    builder.addCase(fetchTodos.rejected,(state,action)=>{
         console.log('Error',action.payload);
        state.isError=true;
    })
  }
})


export const{fetchuers}=userSlice.actions;
export default userSlice.reducer;

