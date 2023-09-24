import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


 const  initialState={
        data:[],
        status:'idle'
    }

const productSlice= createSlice({
    name:"products",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getproducts.pending,(state,action)=>{
           state.status='loading';
           })
       .addCase(getproducts.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.status='idle';
       })
       .addCase(getproducts.rejected,(state,action)=>{
        state.status='error';
        })
    }
})

export const{fetchProducts}=productSlice.actions
export default productSlice.reducer


export const getproducts=createAsyncThunk('products/get',async()=>{
    const data= await fetch('https://fakestoreapi.com/products')
    const result=await data.json();
    return result;
})


