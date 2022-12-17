import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

function E404() {
  return <div> page not found</div>;
}

export default E404;
