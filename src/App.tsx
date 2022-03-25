import React from "react";
import {BrowserRouter, Routes, Route, BrowserRouterProps} from "react-router-dom";
import { Top } from "./components/pages/top/top";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
