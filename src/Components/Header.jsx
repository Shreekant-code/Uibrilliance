import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom"; 
import { Buttons } from "../Pages/Button";

const sidebardetail = [
  { id: 1, Name: "Buttons", path: "/buttons" },
  {id:2,Name:"Background",path:"/bg"},
  {id:3,Name:"Patterns",path:"/patterns"},
  {id:4,Name:"Texts",path:"/text"},
  { id: 5, Name: "Login Page", path: "/login" },
  { id: 6, Name: "Cards", path: "/cards" },

];

export const Header = () => {
  const [isMenuClick, setMenuClick] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="h-[13vh] sticky top-0 bg-black flex items-center justify-center relative 
                   border-b-2 border-cyan-400 shadow-[0_0_15px_#06b6d4] z-100 ">
        <h1 className=" font-bold text-[30px]  md:text-[40px] font-poppins bg-gradient-to-r from-[#ffa052] via-[#e046a4] to-[#6851eb] bg-clip-text text-transparent hover:text-white hover:opacity-70 transition-colors">
  UIbrilliance.dev
</h1>
<span className="absolute bottom-[5px] text-white">Developed by Ajay,Nikhil,Shreekant</span>

        {/* Hamburger (mobile only) */}
        <div className="absolute left-[10px] top-1/2 -translate-y-1/2 flex items-center gap-2 md:hidden">
          <FaBars
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuClick(!isMenuClick)}
          />
        </div>
      </header>

  
      <div className="flex">
  
        <aside
          className={`fixed top-[13vh] left-0 w-64 bg-gray-800 h-screen p-4 transform transition-transform duration-300
          ${isMenuClick ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:fixed md:block z-50`}
        >
          {sidebardetail.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(item.path);      
                setMenuClick(false);     
              }}
              className="mb-4 p-3 bg-gray-700 text-center text-white rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
            >
              {item.Name}
            </div>
          ))}
        </aside>

      
        <main className="flex-1 p-6 md:ml-[250px]">
          
<Outlet />
         
        </main>
      </div>
    </>
  );
};
