import React from "react";

//Components
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <main>
      <div className="w-full md:h-screen md:flex bg-violet-50">
        <SideBar />
        <div className="px-4 py-2 overflow-x-hidden md:h-screen md:grow">
          <div className="justify-between mb-2 lg:flex">
            <div className="flex items-center p-2 text-xs text-gray-400">
              Canvas size:
            </div>
            <div className="flex gap-2 ">
              <button className="block w-full px-3 py-2 mt-1 text-xs text-gray-600 truncate bg-white border border-gray-200 rounded-md hover:bg-antiFlash false">
                Vertical preview
              </button>
              <div className="relative mt-1 text-xs w-80">
                <button className="block w-full px-3 py-2 text-gray-600 truncate bg-white border border-gray-200 rounded-md hover:bg-antiFlash">
                  Full HD
                </button>
                <ul className="hidden absolute z-10 w-full py-2 overflow-hidden bg-white rounded-md shadow-xl">
                  <li className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white">
                    <div className="truncate">Full HD</div>
                    <div className="text-[9px] text-zinc-400">
                      1920 x 1080 px
                    </div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">QHD</div>
                    <div className="text-[9px] text-zinc-400">
                      2560 x 1440 px
                    </div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">Ultra HD 4K</div>
                    <div className="text-[9px] text-zinc-400">
                      3840 x 2160 px
                    </div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPhone 6,7,8,SE</div>
                    <div className="text-[9px] text-zinc-400">667 x 375 px</div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPhone X,XS,12/13 mini</div>
                    <div className="text-[9px] text-zinc-400">812 x 375 px</div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPhone 12/13</div>
                    <div className="text-[9px] text-zinc-400">844 x 390 px</div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPhone XR,XS Max,11 Pro Max</div>
                    <div className="text-[9px] text-zinc-400">896 x 414 px</div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPhone 12/13 Pro Max</div>
                    <div className="text-[9px] text-zinc-400">926 x 428 px</div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPad 9th</div>
                    <div className="text-[9px] text-zinc-400">
                      1080 x 810 px
                    </div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPad Pro 12.9&quot; 5th</div>
                    <div className="text-[9px] text-zinc-400">
                      1366 x 1024 px
                    </div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPad Pro 11&quot; 5th</div>
                    <div className="text-[9px] text-zinc-400">
                      1194 x 834 px
                    </div>
                  </li>
                  <li
                    className="px-3 py-2 border border-white cursor-pointer text-fiord hover:bg-[#445CFF] hover:text-white"
                    id="headlessui-listbox-option-undefined"
                    role="option"
                    tabindex="-1"
                  >
                    <div className="truncate">iPad Air 4th</div>
                    <div className="text-[9px] text-zinc-400">
                      1180 x 820 px
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="svg-container"
            className="flex items-center self-center justify-center"
          ></div>
        </div>
        <div className="absolute top-0 right-0 m-2"></div>
        <div
          className="absolute bottom-0 right-0 z-50 overflow-hidden"
          data-feedback-fish="true"
        >
          <button className="flex justify-center pt-2 text-sm -rotate-45 translate-x-1/2 translate-y-1/2 w-36 h-36 bg-amber-300">
            Feedback
          </button>
        </div>
      </div>
    </main>
  );
}
