import React from 'react';
import "./App.css";
import {useSelector ,useDispatch} from "react-redux";
import { incNumber ,decNumber } from './actions/action';

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
   <div className ='container'>
   <h1>Increment/Decrement counter</h1>
   <h4> Using react and redux</h4>

   <div className="quantity">
      <a   className = "quantity_minus" title ="Decrement"
       onClick ={()=>dispatch(decNumber() )}><span> - </span> </a>
      <input name ="quality" type ="text" className  ="quality_input"  value = {myState}/>
      <a  className = "quantity_plus" title ="Increment"      
        onClick ={()=>dispatch(incNumber())}><span> + </span> </a>
   </div>

   </div>
   </>
  )
}

export default App