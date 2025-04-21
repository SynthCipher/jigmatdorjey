import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import { Analytics } from "@vercel/analytics/react"
// import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="mx-4">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        {/* <Route path="/blog/:id" element={<Blog />}></Route> */}
      </Routes>
      <Footer />
      <Analytics/>
    </div>
  );
};

export default App;
