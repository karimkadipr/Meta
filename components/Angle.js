import React, { useRef, useState } from "react";

const AngleComponent = () => {
  //State
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(152);

  //Refs
  const activeRef = useRef();
  const circleRef = useRef();

  var center = {};
  var calculateAngle = function (x, y) {
    var k = Math.abs(y) / Math.abs(x);
    var angle = (Math.atan(k) * 180) / Math.PI;
    if (y * x > 0) {
      angle = 90 - angle + (y < 0 ? 180 : 0);
    } else {
      angle = angle + (y < 0 ? 90 : 270);
    }

    return angle;
  };

  const handleChangeAngle = (e) => {
    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;

    center = {
      x: 100,
      y: 100,
    };

    var angle = calculateAngle(x - center.x, center.y - y);

    setAngle(Math.round(angle));
  };

  return (
    <div className="rounded-lg bg-antiFlash text-sm">
      <button
        className={`w-full px-6 py-4 mx-auto text-center ease-in-out transform rounded-lg  cursor-pointer hover:bg-[#445CFF] hover:text-white bg-antiFlash text-fiord transition-all duration-300`}
        aria-expanded="false"
        style={{ willChange: "transform" }}
        onClick={() => setActive(!active)}
      >
        <p className="text-left">Angle</p>
        <div
          className={`overflow-hidden transition-[height] duration-300`}
          style={{ height: active ? activeRef.current.clientHeight : 0 }}
        >
          <div className="w-full" ref={activeRef}>
            <div className=" flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 20 20" width="200px" height="200px">
                  <g
                    transform={`rotate(${angle} 10 10)`}
                    x="10"
                    y="10"
                    stroke="currentColor"
                    stroke-opacity="1"
                    stroke-width="0.25"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="#000000"
                      fill-opacity="0.2"
                      ref={circleRef}
                      onMouseMove={(e) => handleChangeAngle(e)}
                    ></circle>
                    <line x1="10" y1="10" x2="10" y2="1"></line>
                  </g>
                  <text
                    x="50%"
                    y="60%"
                    fill="currentColor"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    font-size="1.5"
                  >
                    {angle}º
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AngleComponent;
