import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Main />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/products/:id/edit" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
