import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/login/Login";
import Join from "pages/join/Join";
import Profile from "pages/profile/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

export default function Router() {
  const [isLogin] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/detail/:id"
          element={isLogin ? <Detail /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/login"
          element={!isLogin ? <Login /> : <Navigate replace to="/" />}
        />
        <Route
          path="/join"
          element={!isLogin ? <Join /> : <Navigate replace to="/" />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
