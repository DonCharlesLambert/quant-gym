import { useEffect, useState } from "react";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProblemPage from "./pages/Problem";


export const TOKEN_STORAGE_KEY = "authToken";
export const ID_STORAGE_KEY = "id";
export const API_URL = "http://localhost:8888"

function App() {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_STORAGE_KEY));
  const [id, setId] = useState(localStorage.getItem(ID_STORAGE_KEY));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route
                path="/" /* XXX: change this to go to problem set */
                element={
                    <ProblemPage
                        data={{ activeNavOption: "description" }}
                        token={token}
                        id={id}
                    />
                }
            />
            <Route
                path="/problem/:name/editorial"
                element={
                    <ProblemPage
                        data={{ activeNavOption: "editorial" }}
                        token={token}
                        id={id}
                    />
                }
            />
            <Route
                path="/problem/:name/solutions"
                element={
                    <ProblemPage
                        data={{ activeNavOption: "solutions" }}
                        token={token}
                        id={id}
                    />
                }
            />
            <Route
                path="/problem/:name/submissions"
                element={
                    <ProblemPage
                        data={{ activeNavOption: "submissions" }}
                        token={token}
                        id={id}
                    />
                }
            />
            <Route
                path="/problem/:name"
                element={
                    <ProblemPage
                        data={{ activeNavOption: "description" }}
                        token={token}
                        id={id}
                    />
                }
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
