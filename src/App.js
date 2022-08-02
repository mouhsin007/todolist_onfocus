import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CountDown from './components/CountDown';

function App() {
  return (
    <>
    <div className='bg-[#D95550] flex flex-col items-center'>
      <Header/>
      <CountDown/>
    </div>
    
    </>
  );
}

export default App;
