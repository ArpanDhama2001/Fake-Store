import { useState } from "react";
import Sidebar from "./Sidebar";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="z-10 flex justify-between items-center px-4 sticky top-0 lg:hidden h-[60px] w-full  bg-gradient-to-r from-gradient1 to-gradient2 text-white">
        <div className="flex gap-4">
          <article
            onClick={() => {
              setOpen(!open);
            }}
            className="menu-btn flex gap-2 flex-col"
          >
            <div className="line-1 h-[2px] w-[30px] bg-white"></div>
            <div className="line-2 h-[2px] w-[30px] bg-white"></div>
            <div className="line-3 h-[2px] w-[30px] bg-white"></div>
          </article>
          <article className="logo">logo</article>
        </div>
        <div className="flex gap-4">
          <article className="avatar">avatar</article>
          <article className="cart">cart</article>
        </div>
      </nav>
      <Sidebar open={open} />
    </>
  );
};

export default MobileNavbar;
