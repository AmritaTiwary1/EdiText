import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
//import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = '#07041a';
      document.body.style.color = 'white';
    
    } else {
      setmode("light");
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'black';
    
    }
  }
  return (

    <>
      <Navbar title="EdiText" mode={mode} toggleMode={toggleMode}></Navbar>
      

      <div className="container">
        <TextForm heading="Enter Text Here" mode={mode}></TextForm>
      </div>
      <About></About>



    </>

  );
}

export default App;
