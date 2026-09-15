import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import Register from "./pages/Register";
import RegistrationSuccess from "./pages/RegistrationSuccess";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#141414] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/registration-success"
            element={<RegistrationSuccess />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
