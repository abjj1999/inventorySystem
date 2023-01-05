import React, { useState } from "react";
import { SiWolframlanguage } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="w-100 h-100 d-flex  flex-column align-items-center  ">
      <SiWolframlanguage className="hardhatIcon m-1 mb-3" />

      <div className="bg-dark p-2 text-white sidebar-menu d-flex justify-content-around flex-column">
        <div className="d-flex  flex-column align-items-center">
          <h5>Home</h5>
        </div>
        <div className="d-flex  flex-column align-items-center">
          <h5>My</h5>
          <h5>Stores</h5>
        </div>
        <div className="d-flex  flex-column align-items-center">
          <h5>My</h5>
          <h5>Categories</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
