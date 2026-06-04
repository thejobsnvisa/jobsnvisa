import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav aria-label="Main navigation" className="w-full">
      <div className="relative w-full h-[100px] px-10 bg-green-100 rounded-bl-[60px] rounded-br-[60px] flex items-center justify-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-36 absolute left-20"
        />

        {/* Menu */}
        <ul className="flex items-center gap-10">
          <li>
            <a
              href="#home"
              className="text-green-800  font-base text-[20px] hover:font-bold transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="text-green-800  font-base text-[20px] hover:font-bold transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#recruiters"
              className="text-green-800  font-base text-[20px] hover:font-bold transition"
            >
              Recruiters
            </a>
          </li>

          <li>
            <a
              href="#jobs"
              className="text-green-800  font-base text-[20px] hover:font-bold transition"
            >
              Job Search
            </a>
          </li>

          <li>
            <a
              href="#blogs"
              className="text-green-800  font-base text-[20px] hover:font-bold transition"
            >
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;