import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SignUp from "./components//SignUpComponents/SignUp";
import Login from "./components/LoginComponents/Login";
import Notfound from "./components/Notfound";
import "./index.css";

function App() {

  const [language, setLanguage] = useState(false);

  return (

    <>
      <div className="toggleBtn">
        
        <div>
          <input type="checkbox" id="togglebtn" value={language} onChange={(e) => setLanguage(e.target.checked)} />
          <label htmlFor="togglebtn"></label>
        </div>

      </div>

      <div>
        <Routes>

          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/login" element={<Login language={language} />} />
          <Route path="/signup" element={<SignUp language={language} />} />
          <Route path="/notfound" element={<Notfound language={language} />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />

        </Routes>
      </div>

      <p style={{color: "silver" , margin : "1rem auto" , textAlign : "center" , width : "fit-content" , padding : "5px 15px" }}>Made by @Hossein</p>
    </>

  );
}

export default App;
