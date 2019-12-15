import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Mac">Mac</Link>
        <Link to="/iPad">iPad</Link>
        <Link to="/iPhone">iPhone</Link>
        <Link to="/Watch">Watch</Link>
        <Link to="/Tv">Tv</Link>
        <Link to="/Music">Music</Link>
        <Link to="/Support">Support</Link>
      </ul>
    </div>
  );
};

export default Navigation;
