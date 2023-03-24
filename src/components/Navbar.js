import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full bg-[#FF0640] sm:flex items-center text-center justify-between p-4 md:text-3xl text-2xl font-bold text-white">
      <div>Instagram Follower Tracker</div>
      <div className="flex items-center justify-center gap-10 text-xl sm:mt-0 mt-2">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/tutorial"}>Tutorial</Link>
        </div>
      </div>
    </div>
  );
}
