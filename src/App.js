import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


let name = "hirdesh53";
function App() {

  const [mode, setMode] = useState('dark');//whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
  }
  else{
    setMode('light');
    document.body.style.backgroundcolor = 'white';
    }}  
  return (
    <>
     <Navbar title ="TEXTUtils" aboutText ="About Us" homeText ="Home" mode = {mode} toggleMode={toggleMode}/>
     {/*<Navbar title='TextUtils' />*/}
     <div className="container my-3">
     <TextForm heading = "Enter the text to analyze below"/>
     {/*<About/>*/}
     </div>
    </>
  );
}

export default App;
