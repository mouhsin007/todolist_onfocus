import { clear } from '@testing-library/user-event/dist/clear';
import React, { Component, useState } from 'react';
const CountDown=({countDownColor,setCountDownColor,setBgColor,bgColor})=>{
    const [min,setMin]=useState(0);
    const [sec,setSec]=useState(5);
    const [stateoftimer,setStateoftimer]=useState(false);
    // const [type,setType]=useState('Pomodoro');
    console.log("bgColor="+bgColor);

    const setColor=(countColor,backgroundColor)=>{
        console.log(countColor);
        setCountDownColor(countColor);
        setBgColor(backgroundColor);
    }
    function startcount(){
        setStateoftimer(true)
        if(sec==0){
            setSec("00");
        }
        if(sec==-1){
            setMin(min-1);
            setSec(59);
        }
        if(min==0){
            setMin("00")
            if(sec==-1){
                setSec("00");
                // setType("short break");
                // takeRest();
                setStateoftimer(false);
            
            
            }
        }
        min>=0 && sec>=0 && setTimeout(() => setSec(sec - 1), 1000);

    }
    // function takeRest(){
    //     if(type=="Pomodoro"){
    //         setMin(0);
    //         setSec(5);
    //     }else if(type=="short break"){
    //         setMin(5);
    //         setSec(5)
    //     }
    // }
    React.useEffect(() => {
        if(stateoftimer){  startcount()}
      
      }, [sec,stateoftimer]);
    // function startcount(){
    //     setInterval(()=>{
    //     setSec(sec-1);
    // },10000)
    // }
    
   
    return (
        <div className={`flex flex-col bg-${countDownColor} my-20 w-4/6 md:w-3/6`}>
            <div className='flex justify-between pt-4 px-20 text-white '>
                <button  onClick={()=>setColor('[#DD6662]','[#D95550]')}>Pomodoro</button>
                <button onClick={()=>setColor('[#5E9CA1]','[#4C9195]')}>Short Break</button>
                <button onClick={()=>setColor('[#5889AC]','[#457CA3]')}>Long Break</button>
            </div>
            
            <div className='text-center text-white text-9xl font-bold py-5'>
                <span>{min}:{sec}</span>
            </div>
            <div className='py-4 text-center'>
                <button onClick={()=>startcount()}  className={`bg-[#FFFFFF] text-${bgColor} w-2/4 h-16 rounded font-bold text-4xl pt-2`}>START <hr className='h-2 bg-slate-100 mt-2 rounded'/></button>
            </div>
        </div>
    )
    // const interval = setInterval(() => {
    //    ;
    //     if(sec==0){
    //         setMin(min--)
    //     }
    //   }, 1000);
}
export default CountDown