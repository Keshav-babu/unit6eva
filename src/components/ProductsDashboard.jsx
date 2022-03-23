// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getProductsReq, getProductsSuccess } from "../Redux/actions";

// export const Products = () => {
//   const data=useSelector((store)=>store.products)
//   console.log("products",data)
//   const dispatch=useDispatch()
//   // to get all products list on component mounts
//   useEffect(() => {
//     //   dispatch an action to the store
//     // dont make call here
//     // handle it as thunk call in actions.js
//     //dispatch(getproductsData())
//   }, [dispatch]);

//   //    sort by price
//   const handleSort = (e) => {
//     // dispach handle sort action to the store
//   };
//   return (
//     <>
//       <h2>Products</h2>
//       <select onChange={handleSort}>
//         <option>--sort by --</option>
//         <option value="asc">low to high</option>
//         <option value="desc">high to low</option>
//       </select>
//       <div className="products-list">
//         {/* map throught th products  list and display the results */}
//         {data &&
//           data.map(() => {
//             return <div>{/* display the results here */}</div>;
//           })}
//       </div>
//     </>
//   );
// };
export const Products=()=>{
  const data=useSelector((store)=>store)
  // const dispatch=useDispatch()
  // dispatch(getProductsSuccess())
  
  console.log(data)
  return <div>
    <h2>Product</h2>
  </div>
}