import { useState } from "react";
import "./styles/app.scss";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Campaign from "./pages/Campaign";
import Offerspage from "./pages/Offerspage";
import Campaignform from "./pages/Campaignform";
import Offerspageform from "./pages/Offerspageform";

function App() {
  return (
    <Router basename="/bigcity-admin-panel-demo">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Campaign />} />
          <Route path="offerspage" element={<Offerspage />} />
          <Route path="campaignform" element={<Campaignform />} />
          <Route path="offerspageform" element={<Offerspageform />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
