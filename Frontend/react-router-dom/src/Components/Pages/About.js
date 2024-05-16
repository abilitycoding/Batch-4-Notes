import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const dataFromHome = useLocation().state;
  console.log(dataFromHome);
  return (
    <div>
      <h3 className="text-center p-5">About</h3> 
      <h1>{dataFromHome?.name}</h1>
      <h1>{dataFromHome?.password}</h1>
    </div>
  );
};

export default About;
