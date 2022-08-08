import React, { Component } from 'react';
import {FaRegUserCircle} from 'react-icons/fa';
import {AiOutlineSetting} from 'react-icons/ai';
import {VscGraph} from 'react-icons/vsc';
import {MdOutlineDoneOutline} from 'react-icons/md';

const Header=({countDownColor})=>{
    return(
        <>
            <div className='flex justify-between items-center w-full h-14 px-2 text-white '>
                <a href="#" className='flex justify-between items-center text-xl'><MdOutlineDoneOutline/><span>Pomodoro</span></a>
                <span className='flex justify-around w-32'>
                    <button className={`flex justify-between items-center w-9 h-9 p-2 rounded `} style={{backgroundColor:`${countDownColor}`}}><VscGraph className='h-6 w-6'/><span className='hidden'>report</span></button>
                    <button className={`flex justify-between items-center w-9 h-9 p-2 rounded `} style={{backgroundColor:`${countDownColor}`}}><AiOutlineSetting className='h-6 w-6'/><span className='hidden'>setting</span></button>
                    <button className={`flex justify-between items-center w-9 h-9 p-2 rounded `} style={{backgroundColor:`${countDownColor}`}}><FaRegUserCircle className='h-6 w-6'/><span className='hidden'>login</span></button>
                </span>
           </div>       
         </>
    )
}
export default Header