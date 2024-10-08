import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

  const Links = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About", to: "/about" },
    { id: 3, name: "Service", to: "/service" },
    { id: 4, name: "Contact", to: "/contact" },
    ];
    // <IoCloseSharp />
    const [open, setOpen] = useState(false);
    const OnClose = (e) => {
        e.preventDefault();
        if (open === true) {
            setOpen(!open)
        }
    }
  return (
    <div className="shadow-md left-0 top-0 w-full bg-slate-600 fixed">
          <nav className="md:flex items-center md:py-4 md:px-0 py-2 px-2 justify-between">
              <div className="md:mx-2 flex items-center">
                  <a to="/" className="text-xl text-white font-bold hover:text-slate-300 duration-300 px-1 md:py-1 py-4 cursor-pointer">Game</a>
              </div>
              <div className={`flex absolute text-slate-100 cursor-pointer right-6 top-6 md:hidden`} onClick={()=>setOpen(!open)}>
               {!open ? <GiHamburgerMenu size={25} /> : <IoCloseSharp size={25} />}
              </div>
              <ul className={`md:flex md:items-center md:bg-slate-600  bg-slate-800  md:pb-0 pb-12 absolute md:static   md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-[76px] opacity-100':"left-[-490px]"} md:opacity-100 opacity-0`}>
                        {Links.map(({ name, id,to }) => (
                        <li key={id} className="flex  justify-center  md:mx-3 md:my-0 my-7 mx-0 text-xl md:text-1xl  duration-500" onClick={OnClose}><a to={to}  className="md:text-slate-100 text-slate-100 font-bold hover:text-pink-500 duration-500 cursor-pointer">{name}</a></li>
                        ))}
                </ul>
      </nav>
    </div>
  );
};

export default Navbar;
