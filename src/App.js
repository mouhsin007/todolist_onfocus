import './App.css';
import Header from './components/Header';
import CountDown from './components/CountDown';
import Task from './components/Task';
import { createContext, useContext, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
const UserContext=createContext();
function App() {
  const [countDownColor,setCountDownColor]=useState('#DD6662');
  const [bgColor,setBgColor]=useState('#D95550');
  const [countpmodoro, setCountpmodoro] = useState(0);
  const [focusOrBreak, setFocusOrBreak] = useState('time to focus');
  const [focusColor, setFocusColor] = useState('#BC5753');
  const [currentPomodoros,setCurrentPomodoros]=useState(0)
  return (
    <UserContext.Provider value={isAuth}>
      <div className={`flex flex-col`} style={{backgroundColor:`${bgColor}`}}>
        <div className=''>
          <Header countDownColor={countDownColor}/>
        </div>
        <div>
        <hr className='w-[95%] mx-auto border-red-900'/> 
        </div>
        <div>
          <h1></h1>
        </div>
        <div className=''>
          <CountDown bgColor={bgColor} setBgColor={setBgColor} countDownColor={countDownColor}  setCountDownColor={setCountDownColor} countpmodoro={countpmodoro} setCountpmodoro={setCountpmodoro} setFocusOrBreak={setFocusOrBreak} focusColor={focusColor} setFocusColor={setFocusColor} currentPomodoros={currentPomodoros} setCurrentPomodoros={setCurrentPomodoros}/>
        </div>
        <div className='text-center text-[#F0BBB9]'>#{countpmodoro}</div>
        <div className='text-center text-white'>{focusOrBreak}</div>
        <div>
          <Task countDownColor={countDownColor} focusColor={focusColor} countpmodoro={countpmodoro} setFocusOrBreak={setFocusOrBreak} currentPomodoros={currentPomodoros} setCurrentPomodoros={setCurrentPomodoros}/>
        </div>
      </div>
     
      </UserContext.Provider>
  );
}

export default App;
