import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
//import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

    <>
      <Navbar title="EdiText"></Navbar>
      

      <div className="container">
        <TextForm heading="Enter Text Here"></TextForm>
      </div>
      <About></About>



    </>

  );
}

export default App;
