import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.scss";
import Layout from "./Layout";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/signup" element={<Layout header={<Header />} />} />
      <Route path="contact" element={<h1>Contact</h1>} />
    </Routes>
  </>

  // <Layout header={<Header />} />
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("app"));
