import React, { Component, useEffect, useState } from 'react';
import { IoPlaySkipForwardOutline } from 'react-icons/io5';

const CountDown = ({bgColor, setBgColor, countDownColor,  setCountDownColor,countpmodoro,setCountpmodoro,setFocusOrBreak,focusColor,setFocusColor,currentPomodoros,setCurrentPomodoros}) => {
  
  // const [type, setType] = useState('Pomodoro');
  const [modalstate, setModalstate] = useState(false);
  const [textColor, setTextColor] = useState('text-txt-pomodoro-red');
  const [seconds, setSeconds] = useState(6)
  const [minutes, setMinutes] = useState(0)
  const [timer, setTimer] = useState(false)

  const setColor = (countColor, backgroundColor,txtColor,focus) => {
    setCountDownColor(countColor);
    setBgColor(backgroundColor);
    setTextColor(txtColor);
    setFocusColor(focus)
  }




  

  const Min = minutes > 9 ? minutes : '0' + minutes
  const Sec = seconds > 9 ? seconds : '0' + seconds
  let standarCountPomodoro=2;

  function start() {
    startSound();
    setTimer(!timer);
  }
  // useEffect(() => {



  //   // console.log('start  ' + timer);
  //   if (type == 'short break') {
  //     setMinutes(0);
  //     setSeconds(4);
  //     // console.log('short break  ' + timer);
  //     setModalstate(false);
  //     setBgColor('#4C9195')
  //     setCountDownColor('#5E9CA1')
  //     start()

  //   } else if (type == 'long break') {
  //     setMinutes(0);
  //     setSeconds(4);
  //     setModalstate(false);
  //     setBgColor('#457CA3')
  //     setCountDownColor('#5889AC')
  //     start();
  //   } else {
  //     setCountpmodoro(countpmodoro + 1);
  //     setModalstate(false);
  //     setMinutes(0);
  //     setSeconds(6);
  //     setBgColor('#D95550')
  //     setCountDownColor('#DD6662')
  //     // console.log('pomodoro  ' + timer);

  //   }

  // }, [type])


  useEffect(() => {
    let interval;
    if (timer) {
      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes => minutes - 1)
          } else {

            // setTimer(!timer)
            console.log('timer of 00 '+timer);
            if(countDownColor=='#5889AC'){
              start()
              startSound()
              setMinutes(0);
              setSeconds(6);
              setBgColor('#D95550')
              setCountDownColor('#DD6662')
              setTextColor('text-txt-pomodoro-red')
              setFocusColor('#BC5753')
              setFocusOrBreak('Time to focus!')

            }else{
              toBreak()
            }
            
            setModalstate(true)

          }
        } else {
          setSeconds(seconds - 1);
        }

      }, 1000);
    }
    else if (!timer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

  }, [timer, seconds]);

 const toBreak=()=>{
  if(countpmodoro%standarCountPomodoro==0 && countpmodoro!=0){
    setMinutes(0);
      setSeconds(10);
      setBgColor('#457CA3')
      setCountDownColor('#5889AC')
      setTextColor('text-txt-long-blue')
      setFocusColor('#4B7593')
      setFocusOrBreak('Time for a break!')
      setCountpmodoro(countpmodoro+1)
      
  }
  else if(countDownColor=='#DD6662'){
    startSound()
    setMinutes(0);
    setSeconds(3);
    setCountDownColor('#5E9CA1')
    setBgColor('#4C9195')
    setTextColor('text-txt-short-blue')
    setFocusColor('#508588')
    setFocusOrBreak('Time for a break!')
    console.log(' timer of after pomodor '+timer);
  }else if(countDownColor=='#5E9CA1'){
    startSound()
    setMinutes(0);
    setSeconds(6);
    setBgColor('#D95550')
    setCountDownColor('#DD6662')
    setTextColor('text-txt-pomodoro-red')
    setFocusColor('#BC5753')
    setFocusOrBreak('Time to focus!')
    setCountpmodoro(countpmodoro + 1);
    console.log(' timer of after short break  '+timer);
  }else{
              start()
              startSound()
              setMinutes(0);
              setSeconds(6);
              setBgColor('#D95550')
              setCountDownColor('#DD6662')
              setTextColor('text-txt-pomodoro-red')
              setFocusColor('#BC5753')
              setFocusOrBreak('Time to focus!')

  }
 }

  function choice(a) {
    // setType(a);

  }

  function passer() {
    if(window.confirm('Are you sure you want to finish the round early?(The remaining time will not be counted in the report.)')){
      toBreak()
    }
    
  }
  let audio = new Audio("./sound/sound.mp3")
  const startSound = () => {
    audio.play()
  }


  return (
    <>
      <div className={`flex flex-col items-center w-[95%] mx-auto mt-9 mb-5 rounded-md text-white`} style={{backgroundColor:`${countDownColor}`}}>
        <div className='flex justify-around items-center w-[90%] text-xl py-4'>
          <button onClick={()=>setColor('#DD6662','#D95550','text-txt-pomodoro-red','#BC5753')} className={` p-1 rounded-md`} style={focusColor=='#BC5753'?{backgroundColor:`${focusColor}`}:{backgroundColor:``}}>Pomodoro</button>
          <button onClick={()=>setColor('#5E9CA1','#4C9195','text-txt-short-blue','#508588')} className={` p-1 rounded-md`} style={focusColor=='#508588'?{backgroundColor:`${focusColor}`}:{backgroundColor:``}}>Short break</button>
          <button onClick={()=>setColor('#5889AC','#457CA3','text-txt-long-blue','#4B7593')} className={` p-1 rounded-md`} style={focusColor=='#4B7593'?{backgroundColor:`${focusColor}`}:{backgroundColor:``}}>Long break</button>
        </div>
        <div className='text-8xl font-bold my-3'>
          {Min}:{Sec}
        </div>
        <div>
          <button onClick={()=>start()} className={`w-48 h-16 my-5 ml-8 rounded-md bg-white ${textColor} font-bold text-2xl`}>{!timer?'START':'STOP'}</button>
          <button onClick={()=>passer()} className=''><IoPlaySkipForwardOutline className='relative -right-3 top-2 h-10 w-10'/></button>
        </div>
      </div>
    </>
  )

}
export default CountDown