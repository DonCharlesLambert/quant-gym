import { useEffect, useState } from "react";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProblemPage from "./pages/Problem";


export const TOKEN_STORAGE_KEY = "authToken";
export const ID_STORAGE_KEY = "id";

function App() {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_STORAGE_KEY));
  const [id, setId] = useState(localStorage.getItem(ID_STORAGE_KEY));
  return (
    <div className="App">
      <BrowserRouter>
        <ProblemPage
          data={{ activeNavOption: "editorial" }}
          token={token}
          id={id}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
