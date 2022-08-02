import React, { Component } from 'react';
import {FaRegUserCircle} from 'react-icons/fa';
import {AiOutlineSetting} from 'react-icons/ai';
import {VscGraph} from 'react-icons/vsc';
import {MdOutlineDoneOutline} from 'react-icons/md';

const Header=()=>{
    return(
        <>
        <div className='flex justify-between  h-12 w-[620px] py-2'>
    
                {/* <div className='flex justify-between items-center w-20 text-white'>
                    <a href="#">
                    <MdOutlineDoneOutline/>
                    </a>
                    <span>PromoFocus</span>
                    
                </div> */}
                <button className='flex items-center text-white '><MdOutlineDoneOutline/>PromoFocus</button>
                <ul className='flex justify-between space-x-6 text-white'>
                    {/* <li className='flex bg-red-200 items-center  text-white rounded'><VscGraph/><span className='hidden md:inline'>report</span></li>
                    <li className=' flex bg-red-200 items-center text-white rounde'><AiOutlineSetting/><span className='hidden md:inline'>setting</span></li>
                    <li className='flex bg-red-200 items-center text-white rounded'><FaRegUserCircle/><span className='hidden md:inline'>login</span></li> */}
                    <button className='flex items-center bg-[#E17773] rounded   p-4'><VscGraph/><span className='hidden md:inline'>report</span></button>
                    <button className='flex items-center bg-[#E17773] rounded  p-4'><AiOutlineSetting/><span className='hidden md:inline'>setting</span></button>
                    <button className='flex items-center bg-[#E17773] rounded  p-4'><FaRegUserCircle/><span className='hidden md:inline'>login</span></button>
                </ul>
                
        </div>
        <hr className='bg-red-900 h-1 w-[50%]'/>
        </>
    )
}
export default Header