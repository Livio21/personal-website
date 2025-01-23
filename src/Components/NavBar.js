import { Link } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navbar = document.getElementById('navbar')
  
  
addEventListener('mousedown',(e)=>{
  if  (isOpen){
    if(e.target.id != 'navbar'){
      toggle()
    }
  }
})

  return (
      <div id="navbar"
        className={
          isOpen
            ? " bg-white shadow-lg text-right pt-10 pr-10  rounded-tr-3xl  sticky duration-300 top-3 h-dvh"
            : "p-3 duration-300"
        }
      >
        <button
          className={
            isOpen
              ? "absolute top-3 p-1 right-3 rounded-full bg-gray-100 hover:invert hover:scale-110 active:bg-gray-100 material-symbols-outlined duration-300"
              : "sticky top-3 rounded-full overflow-hidden text-5xl bg-white hover:invert active:bg-gray-100 material-symbols-outlined rotate-180 duration-300"
          }
          onClick={toggle}
        >
          arrow_left
        </button>
        <nav id="navbar" onClick={toggle} className={isOpen ? "sticky top-3 flex flex-col gap-5 mt-4" : " w-0 hidden "}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/works">Works</CustomLink>
        </nav>
      </div>
  );
}

function CustomLink({ to, children }) {
  return (
    <Link
      id="navbar"
      to={to}
      className="bg-gray-200 py-3 px-7 rounded-r-3xl text-center text-slate-900 
      font-semibold text-lg hover:bg-gray-100 hover:scale-110 duration-75 active:scale-100 active:brightness-100"
    >
      {children}
    </Link>
  );
}

export default NavBar;
