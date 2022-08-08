import React, { Component } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { VscTriangleUp } from 'react-icons/vsc';
import { VscTriangleDown } from 'react-icons/vsc';
import { HiPlusCircle } from 'react-icons/hi';
import { BsPlus } from 'react-icons/bs';
import AddTask from './AddTask';
const Task=({countDownColor,focusColor})=>{
    return(
        <>
            <div className='flex flex-col w-[95%] mx-auto mt-7 mb-12 '>
                <div className='flex justify-between text-white'>
                    <span className='text-2xl'>Tasks</span>
                    <button className='w-10 h-10 rounded-md p-2' style={{backgroundColor:`${countDownColor}`}}><BsThreeDotsVertical className='h-6 w-6'/></button>
                </div>
                <div className='mt-3 mb-5'>
                    <hr className='w-full mx-auto border-white'/> 
                </div>
                {false && <div className='relative flex justify-center items-center w-full h-16 text-center text-white rounded-md border-dashed border-2 border-[#db9491]' style={{backgroundColor:`${focusColor}`}}>
                    <HiPlusCircle/>
                    <button>&nbsp; add task</button>
                </div>}
                <AddTask/>
            </div>
        </>
    )
}
export default Task