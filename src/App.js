import './App.css';
import Header from './components/Header';
import CountDown from './components/CountDown';
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [countDownColor,setCountDownColor]=useState('bg-pomodoro-red');
  const [bgColor,setBgColor]=useState('#D95550');
  const [countpmodoro, setCountpmodoro] = useState(0);
  const [focusOrBreak, setFocusOrBreak] = useState('time to focus');
  const [focusColor, setFocusColor] = useState('#BC5753');
  return (
    <>
      <div className={`flex flex-col`} style={{backgroundColor:`${bgColor}`}}>
        <div className=''>
          <Header countDownColor={countDownColor}/>
        </div>
        <div>
        <hr className='w-[95%] mx-auto border-red-900'/> 
        </div>
        <div className=''>
          <CountDown bgColor={bgColor} setBgColor={setBgColor} countDownColor={countDownColor}  setCountDownColor={setCountDownColor} countpmodoro={countpmodoro} setCountpmodoro={setCountpmodoro} setFocusOrBreak={setFocusOrBreak} focusColor={focusColor} setFocusColor={setFocusColor}/>
        </div>
        <div className='text-center text-[#F0BBB9]'>#{countpmodoro}</div>
        <div className='text-center text-white'>{focusOrBreak}</div>
        <div>
          <Task countDownColor={countDownColor} focusColor={focusColor}/>
        </div>
      </div>
    </>
  );
}

export default App;
