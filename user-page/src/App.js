import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateUser from './components/CreateUser';
import UserScreen from './components/UserScreen';

function App() {
  return (
      <BrowserRouter>
      <div style = {{backgroundColor: "#063970"}}>
        <Routes>
        <Route path="/" element={<CreateUser/>} />
        <Route path="/user" element={<UserScreen props={null}/>} />
        </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
