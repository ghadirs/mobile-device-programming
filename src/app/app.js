import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./routes/signup/signup";
import "./app.scss";
import SignIn from "./routes/signin/signin";
import { useEffect } from "react";

function MobileApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to='/signup' replace />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MobileApp;
