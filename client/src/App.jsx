import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import useAuthStore from "./store/useAuthStore";

const App = () => {
  const { user, fetchUser } = useAuthStore();
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
