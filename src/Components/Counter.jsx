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
    <div className='container w-50 mt-5 border'>
        <h1 id='j'>Counter</h1>
        <div>
             <h1 className="fs-1 mt-2 text-center">{count}</h1>
        <button onClick={()=>dispatch(increment())} type="button" className="btn btn-primary mx-3 ">Increment</button>
        <button onClick={()=>dispatch(reset())} type="button" className="btn btn-primary mx-3">Reset</button>
        <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-primary mx-3">Decrement</button>
        </div>
        <div className='d-flex justify-content-between mt-5 mb-3 w-100'>
            <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control' placeholder='enter the amount to be incremented' />
            <button onClick={handleIncrement}  className='btn btn-primary ms-3'>increment by amount</button>
        </div>
        </div>
  )
}

export default Counter