import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Join from "pages/Join";
import Profile from "pages/Profile";
import { useSelector } from "react-redux";

export default function Router() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {/*로그인 여부에 들어갈수있는 페이지*/}
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
