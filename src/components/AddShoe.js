import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./AddShoe.css";
import bg from "./images/bg.jpg";

function AddShoe() {
  const [taskArr, setTaskArr] = useState([]);
  const [inputValName, setInputValName] = useState("");
  const [inputValIdNumber, setInputValIdNumber] = useState("");
  const [inputCash, setInputCash] = useState("");
  const [inputCredit, setInputCredit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  useEffect(() => {
    //? Read
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://63737d12348e9472990dd266.mockapi.io/shoes"
        );
        console.log(data);
        setTaskArr(data);
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
        setTimeout(() => {
          setErrorMes(null);
        }, 1500);
      }
    };
    fetchData();
  }, []);

  const handleAddTask = async () => {
    if (inputValName.trim() && inputValIdNumber.trim()) {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          "https://refactor-bank-api.onrender.com/api/adduser",
          {
            name: inputValName,
            idNumber: inputValIdNumber,
            cash: inputCash,
            credit: inputCredit,
          }
        );
        setTaskArr((prev) => [...prev, data]);
        setInputValName("");
        setInputValIdNumber("");
        setInputCash("");
        setInputCredit("");
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    }
  };

  return (
    <div className="add-shoe">
      <h1>Add New User</h1>
      {errorMes && <h2>{errorMes}</h2>}
      <div className="inputs">
        <input
          value={inputValName}
          placeholder="Name"
          onChange={({ target: { value } }) => setInputValName(value)}
        />
        <input
          value={inputValIdNumber}
          placeholder="IdNumber"
          onChange={({ target: { value } }) => setInputValIdNumber(value)}
        />
        <input
          value={inputCash}
          placeholder="Cash"
          onChange={({ target: { value } }) => setInputCash(value)}
        />
        <input
          value={inputCredit}
          placeholder="Credit"
          onChange={({ target: { value } }) => setInputCredit(value)}
        />
        <button onClick={handleAddTask}>Add User</button>
      </div>

      {isLoading && <h1 className="spinner">Spinner</h1>}
      {setTaskArr.length && (
        <div className="shoe-container">
          {/* {taskArr.map(({ brand, model, id, img, done }, mapIndex) => (
            <div className="shoe" key={id}>
              <div className="shoe-info">
                <p> Name - {brand}</p>
                <p> IdNumber - {model}</p>
                <p>InStock - {!done ? "V" : "X"}</p>
                <img src={img} alt={brand} />
              </div>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
}

export default AddShoe;
