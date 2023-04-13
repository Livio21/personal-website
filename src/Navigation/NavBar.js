import { Link } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={
          isOpen
            ? " bg-white shadow-lg text-right pt-10 pr-10 h-screen rounded-tr-3xl mt-3 relative duration-100"
            : "h-screen p-3 rounded-tr-3xl relative duration-100"
        }
      >
        <button
          className={
            isOpen
              ? "absolute top-3 p-1 right-3 rounded-full bg-gray-100 hover:invert hover:scale-110 active:bg-gray-100 material-symbols-outlined duration-500"
              : "rounded-full text-5xl bg-white hover:invert active:bg-gray-100 material-symbols-outlined rotate-180 duration-500"
          }
          onClick={toggle}
        >
          arrow_left
        </button>
        <nav className={isOpen ? "flex flex-col gap-5 mt-4 " : " w-0 hidden"}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/works">Works</CustomLink>
        </nav>
      </div>
    </>
  );
}

function CustomLink({ to, children }) {
  return (
    <Link
      to={to}
      className="bg-gray-200 py-3 px-7 rounded-r-3xl text-center text-slate-900 
      font-semibold text-lg hover:bg-gray-100 hover:scale-110 duration-75 active:scale-100 active:brightness-100"
    >
      {children}
    </Link>
  );
}

export default NavBar;
