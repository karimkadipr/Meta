import React from "react";

const ButtonSideBar = ({ title, children }) => {
  return (
    <button
      className="inline-flex items-center justify-between w-full px-6 py-4 mx-auto text-center transition duration-500 
    ease-in-out transform rounded-lg hover:bg-[#445CFF] hover:text-white bg-antiFlash text-fiord"
    >
      <span className="text-sm">{title}</span>
      {children}
    </button>
  );
};

export default ButtonSideBar;
