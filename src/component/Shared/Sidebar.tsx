import DashboardSvg from "Svg/Dashboard";
import MovieSvg from "Svg/Movie";
import CloseSvg from "Svg/Close";
import { ReactNode, useState } from "react";
export default function Sidebar({ children }: { children: ReactNode }) {
  const [openSideBar, setOpenSidebar] = useState(true);
  function toggleSidebar() {
    setOpenSidebar((prev) => !prev);
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`${
          openSideBar ? "flex" : "hidden"
        } flex-col w-full md:w-64 bg-gray-800 `}
      >
        <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
          <div className="flex items-center  gap-4 h-16">
            <span className="text-white font-bold uppercase">
              Movies Dashboard
            </span>
            <div className="text-yellow-400 ">
              <MovieSvg />
            </div>
          </div>

          <button className="text-white md:hidden" onClick={toggleSidebar}>
            <CloseSvg />
          </button>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto ">
          <nav className="flex-1 px-2 py-4 bg-gray-800 ">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 space-x-2"
            >
              <span>Dashboard</span>
              <div>
                <DashboardSvg />
              </div>
            </a>
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto ">
        <div className="flex items-center justify-between min-h-16  border-b border-gray-200 bg-gray-100 sticky top-0  z-1">
          <div className="flex items-center px-4">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-700"
              onClick={toggleSidebar}
            >
              <DashboardSvg />
            </button>
          </div>
          {!openSideBar && (
            <div className="flex items-center  gap-4 h-16 px-4">
              <div className="text-yellow-400 ">
                <MovieSvg />
              </div>
              <span className="text-gray-800 font-bold uppercase">
                Movies Dashboard
              </span>
            </div>
          )}
        </div>
        <div className={`${openSideBar ? "px-4" : "px-8"} relative`}>{children}</div>
      </div>
    </div>
  );
}
