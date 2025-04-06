import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
//import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = '#07041a';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled");
    } else {
      setmode("light");
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'black';
      showAlert("Light Mode Enable");
    }
  }
  return (

    <>
      <Navbar title="EdiText" mode={mode} toggleMode={toggleMode}></Navbar>
      <div style={{height:'30px'}}><Alert alert={alert}></Alert></div>

      <div className="container">
        <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert}></TextForm>
      </div>
      <About></About>



    </>

  );
}

export default App;
