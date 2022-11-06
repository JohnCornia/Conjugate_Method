import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Records  from "./records";
import About from "./about";
import Home from "./home";
import NotFound from "./NotFound";
import Layout from "./layout";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="records" element={<Records />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);