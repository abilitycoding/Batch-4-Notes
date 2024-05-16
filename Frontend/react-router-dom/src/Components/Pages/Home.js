import React from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const data = {
    name: "sandy",
    password: 12345
  };

  const handleGoToAbout = () => {
    navigate("/about", { state: data });
  };

  return (
    <div>
      <h3 className="text-center py-5">Welcome to home</h3>
      <Button onClick={handleGoToAbout}>Go to About</Button>
      <NavLink to={"/contact"} state={data}>
        <button>Contact</button>
      </NavLink>
    </div>
  );
};

export default Home;
