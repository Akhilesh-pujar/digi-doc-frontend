import React from "react";
import Home from "./components/Home";
import Document from "./components/Document";
import Attendance from "./components/Attendance";
import Footer from "./components/Footer";
import PostDocument from "./components/PostDocument";
import PostAttendance from "./components/PostAttendance";
import ComposeDocument from "./components/ComposeDocument";
import ComposeAttendance from "./components/ComposeAttendance";
import DocCategory from "./components/SearchedDocument";
import MisCategory from "./components/SearchedAttendance";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/documents" element={<Document />} />
          <Route exact path="/attendances" element={<Attendance />} />
          <Route exact path="/postdoc" element={<PostDocument />} />
          <Route exact path="/postattend" element={<PostAttendance />} />
          <Route exact path="/composedoc" element={<ComposeDocument />} />
          <Route exact path="/composeattend" element={<ComposeAttendance />} />
          <Route exact path="/documents/:category" element={<DocCategory />} />
          <Route exact path="/attendances/:mis" element={<MisCategory />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
