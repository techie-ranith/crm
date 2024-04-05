
import React from 'react';
import './App.css';
import AddUsers from './component/AddUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPasswordWindow1 from './component/password/ResetPasswordWindow1';
import ResetPasswordWindow2 from './component/password/ResetPasswordWindow2';
import Login from './component/login/Login';
import ResetPasswordWindow3 from './component/password/ResetPasswordWindow3';




function App() {
  
  return (
     
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/addUser' element={<AddUsers/>}></Route>
          <Route path='/reset-password-window-1' element={<ResetPasswordWindow1/>}></Route>
          <Route path="/reset-password-window-2" element={<ResetPasswordWindow2 />}></Route>
          <Route path="/reset-password-window-3" element={<ResetPasswordWindow3/>}></Route>

          
        </Routes>
      </Router>
     
    
  );
}

export default App;
