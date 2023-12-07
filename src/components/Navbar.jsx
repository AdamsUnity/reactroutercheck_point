import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // simple navBAr
    <div className="w-full h-[20vh]">
      <nav className="shadow-xl p-2 flex justify-center gap-5 items-center bg-[#003f2062]">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/09/22/24/filmklappe-1085692_640.png"
          className="w-20"
        />
        <h1 className="text-4xl sm:text-6xl italic text-white-500 font-bold">
          Movie Collections
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;

// return (
//   <nav className="shadow-md p-4  ">
//     <div className="max-w-4xl mx-auto justify-between flex  items-center ">
//       <div className="flex items-center">
//         <img
//           src="https://cdn.pixabay.com/photo/2015/12/09/22/24/filmklappe-1085692_640.png"
//           alt="Brand Logo"
//           className="w-14"
//         />
//         <h2 className="text-blue-500 tracking-wide">Movie app</h2>
//       </div>
//       <div className="gap-4 flex items-center">
//         <NavLink to={"/"}>HOME</NavLink>
//         <NavLink to={"/movieplace"}>Movie Collections</NavLink>
//       </div>
//     </div>
//   </nav>
// );
