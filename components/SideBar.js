import React, { useState } from "react";

//Components
import ButtonSideBar from "./ButtonSideBar";
import Angle from "./Angle";
import Collapse from "./Collapse";

//Other
import { ChromePicker } from "react-color";

const SideBar = () => {
  const [color, setColor] = useState("#121212");

  return (
    <aside className="justify-center w-full bg-white border-l backdrop-filter backdrop-blur firefox:bg-opacity-95 bg-opacity-95 md:items-center md:max-w-xs md:drop-shadow-sm md:overflow-y-hidden">
      <div className="flex flex-col items-start w-full h-full mx-auto border-cadet controls">
        {/* Wicked Backgrounds */}
        <div className="z-10 flex-col w-full p-4 space-y-3 shadow-sm">
          <div className="inline-flex items-center justify-between w-full">
            <div className="w-8 h-8 cursor-pointer bg-[#445CFF] md:hidden"></div>
            <div className="focus:outline-none focus:shadow-outline">
              <a
                className="text-lg font-bold focus:outline-none focus:ring"
                href="#"
              >
                <span className="py-4 ml-2 transition duration-1000 ease-in-out transform text-ultramarine hover:text-oyster focus:outline-none focus:text-ultramarine md:my-0">
                  Not Wicked Backgrounds
                </span>
              </a>
            </div>
            <a
              title="resources"
              className="transition duration-1000 ease-in-out transform xl:pl-6 text-bayoux hover:text-ultramarine md:my-0 hover:border-ultramarine"
              href="https://twitter.com/intent/tweet?url=http://wickedbackgrounds.com/&amp;text=Check%20out%20Wickedbackgrounds,%20a%20waves%20background%20generator%0Aby%20@mike_andreuzza%20and%20@g_perales."
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="opacity-40"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Side Bar Content */}
        <div className="w-full overflow-y-hidden shadow-md md:shadow-none md:h-full md:flex md:flex-col md:flex-1">
          <div className="p-4 pb-6 space-y-2 overflow-y-scroll md:pb-16">
            <Collapse title="Download">
              {/* Icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L1 14C1 15.6569 2.34315 17 4 17L14 17C15.6569 17 17 15.6569 17 14L17 13M13 9L9 13M9 13L5 9M9 13L9 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              {/* Content */}
              <div className="px-6 py-4 rounded-lg bg-antiFlash text-fiord">
                <div className="flex justify-between gap-1 text-xs rounded-md">
                  <button
                    className="w-1/2 px-2 py-1 transition duration-500 ease-in-out transform bg-white border rounded-md hover:bg-[#445CFF] hover:text-white umami--click--download umami--click--download-svg"
                    value="SVG"
                  >
                    SVG
                  </button>
                  <button
                    className="w-1/2 px-2 py-1 transition duration-500 ease-in-out transform bg-white border rounded-md hover:bg-[#445CFF] hover:text-white umami--click--download umami--click--download-png"
                    value="PNG"
                  >
                    PNG
                  </button>
                </div>
              </div>
            </Collapse>
            <ButtonSideBar title="Copy SVG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
            </ButtonSideBar>
            <ButtonSideBar title="Refresh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                ></path>
              </svg>
            </ButtonSideBar>

            <Collapse title="Pick a color">
              {/* Icon */}
              <div
                className="h-5 w-5 rounded-full"
                style={{ background: color }}
              ></div>

              {/* Content */}
              <div className="flex justify-center px-6 py-4 rounded-lg bg-antiFlash text-fiord">
                <ChromePicker
                  color={color}
                  onChangeComplete={(color) => setColor(color.hex)}
                />
              </div>
            </Collapse>
            <Angle />

            <Collapse title="Color mode">
              {/* Icon  */}
              <div></div>

              {/* Content */}
              <div
                className="overflow-hidden"
                id="headlessui-disclosure-panel-undefined"
              >
                <div className="px-6 py-4 rounded-lg bg-antiFlash text-fiord">
                  <div className="flex justify-between gap-1 text-xs rounded-md">
                    <button
                      className="w-1/3 px-2 py-1 transition duration-500 ease-in-out transform bg-white border rounded-md  hover:bg-[#445CFF] hover:text-white
                          bg-[#445CFF] text-white
                          "
                      value="lighten"
                    >
                      Lighten
                    </button>
                    <button
                      className="w-1/3 px-2 py-1 transition duration-500 ease-in-out transform bg-white border rounded-md  hover:bg-[#445CFF] hover:text-white
                          
                          "
                      value="darken"
                    >
                      Darken
                    </button>
                    <button
                      className="w-1/3 px-2 py-1 transition duration-500 ease-in-out transform bg-white border rounded-md  hover:bg-[#445CFF] hover:text-white
                          
                          "
                      value="spin"
                    >
                      Spin
                    </button>
                  </div>
                </div>
              </div>
            </Collapse>

            <Collapse title="Waves count">
              {/* Icon */}
              <div></div>

              {/* Content */}
              <div
                className="overflow-hidden"
                id="headlessui-disclosure-panel-undefined"
              >
                <div className="px-6 py-4 rounded-lg bg-antiFlash text-fiord">
                  <div className="flex flex-col">
                    <input type="range" min="1" max="12" value="4" />
                  </div>
                </div>
              </div>
            </Collapse>
            <Collapse title="Contrast">
              {/* Icon Child 0 */}
              <div></div>

              {/* Content Child 1 */}
              <div
                className="overflow-hidden"
                id="headlessui-disclosure-panel-undefined"
              >
                <div className="px-6 py-4 rounded-lg bg-antiFlash text-fiord">
                  <div className="flex flex-col">
                    <input type="range" min="0" max="128" value="64" />
                  </div>
                </div>
              </div>
            </Collapse>

            <div className="pt-4"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
