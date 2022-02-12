import React, { useRef, useState } from "react";

const Collapse = ({ title, children }) => {
  const [active, setActive] = useState(false);
  const activeRef = useRef();

  return (
    <section className="rounded-lg bg-antiFlash text-sm ">
      <button
        className={`flex items-center justify-between w-full px-6 py-4 mx-auto text-center  ease-in-out transform ${
          active ? "rounded-t-lg" : "rounded-lg"
        } cursor-pointer hover:bg-[#445CFF] hover:text-white bg-antiFlash text-fiord transition-all duration-300`}
        style={{ willChange: "transform" }}
        onClick={() => setActive(!active)}
      >
        <span>{title}</span>
        {children[0]}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300`}
        style={{ height: active ? activeRef.current.clientHeight : 0 }}
      >
        <div ref={activeRef}>{children[1]}</div>
      </div>
    </section>
  );
};

export default Collapse;
