import React, { useEffect } from 'react'
import {BsPlus} from 'react-icons/bs'
import {HiLockClosed} from 'react-icons/hi'
import {VscTriangleDown} from 'react-icons/vsc'
import {VscTriangleUp} from 'react-icons/vsc'

const Update = ({key,inputTask,inputPomodoros,setInputTask,setInputPomodoros,task,tasks,setTasks,setShowAddTask}) => {

  function save(){
    setTasks(tasks.map((e)=>{
      if(task.id==e.id){
        return{
          ...e,text:inputTask,pomodoros:inputPomodoros,modified:false,
        };
      }
      return e;
    }))
  }
 const inputChangetask=(e)=>{
    setInputTask(e.target.value)
  }
  const inputChangepomodoros=(e)=>{
    setInputPomodoros(e.target.value)
  }
  function cancel(){
    setShowAddTask(true)
    console.log(tasks);
    
    setTasks(tasks.map((e) =>{
      return{
        ...e,modified:false,
      }
    }))
  }

  function deleteTask(){
    setTasks(tasks.filter(e=>e.id!==task.id))
  }

  return (
    <div className='flex flex-col w-full h-auto rounded-md bg-white mb-4'>
      <input onChange={inputChangetask}  maxLength={10} value={inputTask} className='ml-4 mt-3 focus:outline-0 text-2xl' type="text" placeholder='What are you working on?' />
      <span className='ml-4 mt-3 text-xl font-bold'>Est Pomodoros</span>
      <div className='flex justify-start items-center ml-4 mt-3 text-xl'>
        <input onChange={inputChangepomodoros}  className='h-10 w-20 focus:outline-0 rounded-md bg-[#EFEFEF]' value={inputPomodoros} type="number"  />
        <button className='ml-2 h-10 w-10 rounded-md border-solid border-2 shadow-sm p-2 pt-3 shadow-slate-400'><VscTriangleDown/></button>
        <button className='ml-2 h-10 w-10 rounded-md border-solid border-2 shadow-sm p-2  shadow-slate-400'><VscTriangleUp/></button>
      </div>
      <div className='flex justify-start ml-4 mt-4 mb-6 text-[#999999]'>
        <span className='flex items-center underline'><BsPlus/>Add Note</span>
        <span className='flex items-center ml-2 underline '><BsPlus/>Add Proect&nbsp;<HiLockClosed/></span>
      </div>
      <div className='flex justify-between items-center text-[#999999] text-xl h-16 w-full bg-[#EFEFEF]'>
        <div>
        <button onClick={()=>deleteTask()} className='ml-4'>delete</button>
        </div>
        <div className='flex justify-between  w-36  mr-4'>
          <button onClick={()=>cancel()}>cancel</button>
          <button onClick={(()=>save())} className='p-2 rounded-md bg-[#222222]'>save</button>
        </div>
      </div>
    </div>
  )
}

export default Update