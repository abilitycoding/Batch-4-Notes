import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import MainNavbar from "./Components/Common/MainNavbar";
import NotFound from "./Components/Common/NotFound";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
