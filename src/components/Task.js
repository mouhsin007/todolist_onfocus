import React, { Component, useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { VscTriangleUp } from 'react-icons/vsc';
import { VscTriangleDown } from 'react-icons/vsc';
import { HiPlusCircle } from 'react-icons/hi';
import { BsPlus } from 'react-icons/bs';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import AddTask from './AddTask';
import Update from './Update';
const Task=({countDownColor,focusColor,countpmodoro,setFocusOrBreak,currentPomodoros,setCurrentPomodoros})=>{
    const [showAddTask,setShowAddTask]=useState(true)
    const [inputTask,setInputTask]=useState('')
    const [tasks,setTasks]=useState([])
    const [inputPomodoros,setInputPomodoros]=useState(1)
    const [k,setK]=useState({})



    
    function addTask(){
        setInputTask('')
        setInputPomodoros(1)
        setShowAddTask(!showAddTask)
        setTasks(tasks.map((e)=>{
            return{
                ...e,modified:false,
            }
        }))
    }
    function setinputs(tsk){
        setInputTask(tsk.text)
        setInputPomodoros(tsk.pomodoros)
    }
    function threeDot(tache){
        setShowAddTask(true)
        if(tache.modified){
            setTasks(tasks.map((e)=>{
                if(e.id==tache.id){
                    return{
                        ...e,modified:false,
                    };
                }else{
                    return{
                        ...e,modified:false,
                    }
                }
            }))
            
        }else{
            setinputs(tache)
            setTasks(tasks.map((e)=>{
                if(e.id==tache.id){
                    return{
                        ...e,modified:true,
                    };
                }else{
                    return{
                        ...e,modified:false,
                    }
                }
                
            }))
        }
        
    }
     useEffect(()=>{
         if(countDownColor=='#5E9CA1' || countDownColor=='#5889AC'){

            setTasks(tasks.map((e)=>{
                
                if(e.clicked==true){
                    return{
                        ...e,currentPomodoro:e.currentPomodoro+1,
                    }
                };
                return e;
            }))
         }
     },[countDownColor])
    function divTaskClik(tsk){
        setFocusOrBreak(tsk.text)
            setTasks(tasks.map((e)=>{
                if(tsk.id==e.id){
                    return{
                        ...e,currentPomodoro:e.currentPomodoro,clicked:true,
                    }
                }
                return{
                    ...e,clicked:false,
                };
            }))
    }

    function done(task){
        setTasks(tasks.map((e)=>{
            if(task.id==e.id){
                return{
                    ...e,completed:!e.completed,
                };
            }
            return e;
        }))
    }

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
                {/* --------------------tasks------------------ */}
                {tasks.map((task)=>(
                
                !task.modified?<div className='flex justify-between w-full mb-4 rounded-md bg-white'>
                    <div className={`${task.clicked? 'bg-black' : 'bg-[#999999]'} rounded w-1 h-auto`}></div>
                    <div className='flex justify-between items-center w-full ml-1 '>
                        <div className='flex justify-between items-center mr-4'>
                            <button onClick={()=>done(task)}><IoIosCheckmarkCircle className={`w-10 h-10 mr-1 ${task.completed?'text-red-600':'text-[#999999]'}`}/></button>
                            <span onClick={()=>divTaskClik(task)} className={`${task.completed?'line-through text-[#999999]':''} text-justify`}>{task.text}</span>
                        </div>
                        <div className='flex justify-between items-center w-20 shrink-0 '>
                        <span className=' text-xl text-[#999999]'>{task.currentPomodoro}/{task.pomodoros}</span>
                            <button onClick={()=>threeDot(task)} className='w-8 h-8 rounded-md p-1  border-solid border-2 text-[#999999]'><BsThreeDotsVertical className='h-5 w-5'/></button>
                        </div>
                    </div>
                </div> :
                // -----------component for updating task------------
                    <div>
                        <Update key={task.id} inputTask={inputTask} inputPomodoros={inputPomodoros} setInputTask={setInputTask} setInputPomodoros={setInputPomodoros} task={task} tasks={tasks} setTasks={setTasks} setShowAddTask={setShowAddTask}/>
                    </div>
                ))}
                {/* -------------end tasks----------- */}
                
                {!showAddTask && <AddTask tasks={tasks} setTasks={setTasks} setFocusOrBreak={setFocusOrBreak} setShowAddTask={setShowAddTask} inputTask={inputTask} setInputTask={setInputTask} inputPomodoros={inputPomodoros} setInputPomodoros={setInputPomodoros} />}
                {showAddTask && <div onClick={()=>addTask()} className='flex justify-center items-center w-full h-16 text-center text-white rounded-md border-dashed border-2 border-[#db9491]' style={{backgroundColor:`${focusColor}`}}>
                    <HiPlusCircle/>
                    <button>&nbsp; add task</button>
                </div>}
                
            </div>
        </>
    )
}
export default Task