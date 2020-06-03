import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import TopNav from "./containers/TopNav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav></TopNav>
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
