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
      className={
        isOpen
          ? "h-full absolute pt-3"
          : "sticky top-1/2 left-3 w-0 h-0"
      }
    >
      <div
        id="navbar"
        className={isOpen ? "h-full rounded-tr-xl   bg-zinc-900" : "hidden h-0 w-0 "}
      >
        <nav
          id="navbar-nav"
          onClick={toggle}
          className={
            isOpen
              ? "sticky top-16 flex flex-col divide-solid divide-white/10 divide-y "
              : "hidden"
          }
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
            ? "hidden w-0 h-0"
            : "material-symbols-outlined p-2 rounded-full bg-white overflow-hidden hover:invert active:bg-zinc-100  duration-300"
        }
        onClick={toggle}
      >
        arrow_right
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
