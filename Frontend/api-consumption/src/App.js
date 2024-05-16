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
import Register from "./Components/Pages/Register";
import Update from "./Components/Pages/Update";
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
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
