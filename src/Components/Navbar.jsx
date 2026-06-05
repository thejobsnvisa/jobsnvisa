import { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Recruiters", href: "#recruiters" },
    { name: "Job Search", href: "#jobs" },
    { name: "Blogs", href: "#blogs" },
  ];

  return (
    <nav aria-label="Main navigation" className="w-full">
      {/* Container switches to lg:justify-center only at 1024px+ */}
      <div className="relative w-full h-auto min-h-[100px] px-6 lg:px-10 bg-green-100 rounded-bl-[40px] rounded-br-[40px] flex items-center justify-between lg:justify-center">
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-28 lg:h-12 lg:w-36 lg:absolute lg:left-20" />

        {/* Hamburger Icon - Hidden on lg (1024px) and above */}
        <button 
          className="lg:hidden text-green-800 text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu - Hidden by default, flex on lg and above */}
        <ul className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:relative top-[100px] lg:top-0 left-0 w-full lg:w-auto bg-green-100 lg:bg-transparent p-10 lg:p-0 gap-6 lg:gap-10 items-center transition-all duration-300 z-40`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-green-800 font-base text-[20px] hover:font-bold transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;