import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

import AddShoe from "./components/AddShoe";
import E404 from "./components/E404";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import ShoePage from "./components/ShoePage";
import Store from "./components/Store";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:shoeId" element={<ShoePage />} />
        <Route path="/addshoe" element={<AddShoe />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </div>
  );
}
export default App;
