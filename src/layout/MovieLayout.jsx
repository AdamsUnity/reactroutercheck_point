import { Button } from "antd";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MovieLayout = () => {
  return (
    <div>
      <div className="flex gap-4 max-w-4xl mx-auto px-2 my-4">
        <NavLink to="/movieplace">
          <Button className="max-w-4xl">Back to Movie Collection</Button>{" "}
        </NavLink>
        {/* <NavLink to="/">Back to Home</NavLink> */}
      </div>
      <Outlet />
    </div>
  );
};

export default MovieLayout;
