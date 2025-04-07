import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "../Pages/Home";
import Test from "../Pages/Test"

function NotFound() {
  return <h1>Page Not Found</h1>;
}

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
