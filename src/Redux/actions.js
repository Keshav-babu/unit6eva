import { REQUEST, SUCCESS } from "./actionTypes";
import {axios} from "axios"
// let data=[]
// axios.get("https://movie-fake-server.herokuapp.com/products")
// .then((res)=>{
//     return 
// })
// action for get products request
export const getProductsReq = (data) => ({
    type:REQUEST,payload:data
});

// action for get products success

export const getProductsSuccess = () => ({
    type:SUCCESS
});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
const getproductsData = () => ({});

// action object for sort  feature

const sortProducts = (data) => ({
    type:sortProducts,payload:data
});
