"use client";

import clsx from "clsx";
import {
  IoCloseOutline,
  IoSearchOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import { AdminSidebarOptions, SidebarOptions } from "./sidebar-options";
import { SidebarOption } from "./SidebarOption";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}

        {SidebarOptions.map((option,index) => (
          <SidebarOption {...option} key={index} />
        ))}

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />
        
        {AdminSidebarOptions.map((option, index) => (
          <SidebarOption {...option} key={`${index}-${option.label}`} />
        ))}
      </nav>
    </div>
  );
};
