import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'


function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state)=>state.counterSlice.count)
   const [amount,setAmount]=useState(0)
   const handleIncrement = ()=>{
    if(amount>0){
        dispatch(incrementbyAmount(+amount))
        setAmount("")
    }else{
        alert("enter valid amount")
    }
   }
  return (
    <div className='rounded border p-3 d-flex justify-content-center align-items-center flex-column p-5' style={{width:'600px'}}>
             <h1 style={{fontSize:'100px'}}>{count}</h1>
             <div className='d-flex justify-content-evenly mt-3 w-100'>
        <button onClick={()=>dispatch(increment())} type="button" className="btn btn-success mx-3 ">Increment</button>
        <button onClick={()=>dispatch(reset())} type="button" className="btn btn-danger mx-3">Reset</button>
        <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-warning mx-3">Decrement</button>
        </div>
        <div className='d-flex justify-content-between mt-5 mb-3 w-100'>
            <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control' placeholder='enter the amount to be incremented' />
            <button onClick={handleIncrement}  className='btn btn-primary ms-3'>increment by amount</button>
        
        </div>
        </div>
  )
}

export default Counter