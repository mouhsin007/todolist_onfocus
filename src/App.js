import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CountDown from './components/CountDown';
import { useState } from 'react';

function App() {
  const [countDownColor,setCountDownColor]=useState('[#DD6662]');
  const [bgColor,setBgColor]=useState('[#D95550]');
  console.log(bgColor)
  return (
    <>
    <div className={`bg-${bgColor} flex flex-col items-center`}>
      <Header/>
      <CountDown countDownColor={countDownColor} setCountDownColor={setCountDownColor} setBgColor={setBgColor} bgColor={bgColor}/>
    </div>
    
    </>
  );
}

export default App;
