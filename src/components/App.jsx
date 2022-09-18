/*
 *  Copyright 2022 Patrick L. Branson
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from "react";
import ReactDOM from "react-dom";

// Allow access to the bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import { DataProvider } from "../context/DataContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/GroupedTeamMembers" element={GroupedTeamMembers} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
