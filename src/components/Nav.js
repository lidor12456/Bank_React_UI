import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to="/store">All Users</Link>
        </li>
        <li className="nav__li">
          <Link to="/addshoe">Add User</Link>
        </li>
        <li className="nav__li">
          <Link to="/">Depots and Transfer</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
