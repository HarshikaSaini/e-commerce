import React from "react";
import Header from "./components/header/Header.jsx";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/MainPage.jsx";
import { DataProvider } from "./GlobalContext.jsx";

const App = () => {
  return (
    <DataProvider>
    <Router>
      <div className="w-full h-screen flex flex-col ">
        <Header />
        <Main />
      </div>
    </Router>
    </DataProvider>
  );
};

export default App;
