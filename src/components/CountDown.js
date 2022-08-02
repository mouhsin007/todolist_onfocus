import React, { Component } from 'react';
const CountDown=()=>{
    return (
        <div className='flex flex-col bg-[#DD6662] my-20 w-4/6 md:w-3/6'>
            <div className='flex justify-between pt-4 px-20 text-white '>
                <button className=''>Promodoro</button>
                <button>Short Break</button>
                <button>Long Break</button>
            </div>
            
            <div className='text-center text-white text-9xl font-bold py-5'>
                <span>25:00</span>
            </div>
            <div className='py-4 text-center'>
                <button className='bg-[#FFFFFF] text-[#D95550] w-2/4 h-16 rounded font-bold text-4xl pt-2'>START <hr className='h-2 bg-slate-100 mt-2 rounded'/></button>
            </div>
        </div>
    )
}
export default CountDown