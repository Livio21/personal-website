import { Link } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const root = document.getElementById("root");

  root.addEventListener("mousedown", (e) => {
    if (isOpen) {
      if (e.target.id != "navbar") {
        toggle();
      }
    }
  });

  return (
    <div
      id="navbar"
      className={isOpen ? "shadow-lg duration-300 pt-4 h-dvh" : "p-3 duration-300"}
    >
      <div
        className={isOpen ? " bg-white/10  pt-10 h-full rounded-tr-xl " : "w-0"}
      >
        <nav
          id="navbar-nav"
          onClick={toggle}
          className={isOpen ? "sticky top-16 max-h-fit flex flex-col divide-solid divide-white/10 divide-y mt-4 " :"hidden" }
        >
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/works">Works</CustomLink>
        </nav>
      </div>
      <button
        className={
          isOpen 
            ? "hidden"
            : "sticky top-3 rounded-full text-5xl bg-white overflow-hidden  hover:invert active:bg-zinc-100 material-symbols-outlined duration-300"
        }
        onClick={toggle}
      >
        {isOpen ? "arrow_left" : "arrow_right"}
      </button>
    </div>
  );
}

function CustomLink({ to, children }) {
  return (
    <Link
      id="navbar"
      to={to}
      className="py-3 px-10 text-center text-white 
      font-semibold text-lg hover:bg-white/20 duration-75 "
    >
      {children}
    </Link>
  );
}

export default NavBar;
