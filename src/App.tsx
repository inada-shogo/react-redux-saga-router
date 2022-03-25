import React from "react";
import {BrowserRouter, Routes, Route, BrowserRouterProps} from "react-router-dom";
import { Page2 } from "./components/pages/page2/page2";
import { Top } from "./components/pages/top/top";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="test" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
