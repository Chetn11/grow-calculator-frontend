import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionType";


// const baseUrl="http://localhost:8080/ads";

export const getData=async (dispatch,baseUrl)=>{
    try {
        dispatch({type:GET_DATA_LOADING});
        const response=await axios.get(baseUrl);
        dispatch({type:GET_DATA_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:GET_DATA_ERROR});
    }
}