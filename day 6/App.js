import LoginPage from "./user/js/login";
import RegistrationPage from "./user/js/register";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Frontpage from "./frontpage";
import About from "./about";
import Contact from "./contact";
import Profile from "./profile";
import Dash from "./dashboard";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>={" "}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dash />} />
        </Routes>
      </Router>
    </>
  );
}
