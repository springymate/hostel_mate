// import { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Rooms } from "./pages/Rooms";
import { About } from "./pages/About";
import { Signup } from "./pages/Signup";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
