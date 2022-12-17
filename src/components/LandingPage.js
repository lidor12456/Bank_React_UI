import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./LandingPage.css";
import bg from "./images/bg.jpg";

function LandingPage() {
  const [userToDepots, setUserToDepots] = useState("");
  const [cashToDepots, setCashToDepots] = useState("");
  const [giver, setGiver] = useState("");
  const [receiver, setReceiver] = useState("");
  const [cashToTransfer, setCashToTransfer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  const handleDepots = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `https://refactor-bank-api.onrender.com/api/depots/${userToDepots}`,
        {
          cash: cashToDepots,
        }
      );
      setIsLoading(false);
    } catch (e) {
      setErrorMes(e.message);
    }
  };
  const handleTransferCash = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `https://refactor-bank-api.onrender.com/api/transfercash/${giver}/${receiver}`,
        {
          cash: cashToTransfer,
        }
      );
      setIsLoading(false);
    } catch (e) {
      setErrorMes(e.message);
    }
  };

  return (
    <div className="landing-page">
      <h2>Depots To :</h2>
      {isLoading && <h1 className="spinner">Spinner</h1>}
      {errorMes && <h2>{errorMes}</h2>}
      <div className="inputs">
        <input
          placeholder="Id"
          onChange={({ target: { value } }) => setUserToDepots(value)}
        />
        <input
          placeholder="Cash To Depots"
          onChange={({ target: { value } }) => setCashToDepots(value)}
        />
        <button onClick={handleDepots}>Depots</button>
      </div>
      <h2>Transfer Cash Between</h2>
      {isLoading && <h1 className="spinner">Spinner</h1>}
      {errorMes && <h2>{errorMes}</h2>}
      <div className="inputs">
        <input
          placeholder="Giver Id"
          onChange={({ target: { value } }) => setGiver(value)}
        />
        <input
          placeholder="Receiver Id"
          onChange={({ target: { value } }) => setReceiver(value)}
        />
        <input
          placeholder="Cash To Transfer"
          onChange={({ target: { value } }) => setCashToTransfer(value)}
        />
        <button onClick={handleTransferCash}>Depots</button>
      </div>
      <br></br>
      <div className="info">{/* <p>some info</p> */}</div>
    </div>
  );
}

export default LandingPage;
