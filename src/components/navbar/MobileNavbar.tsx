import { useEffect, useState, useRef } from "react";
import { BiPackage } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { totalItemsInCart } from "../../utilities/totalItemsInCart";
import Sidebar from "./Sidebar";

const MobileNavbar = () => {
  const cart = useAppSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState<string>("0");

  const navRef = useRef<HTMLElement>(null);

  function clickedOutside(event: any) {
    if (!navRef.current?.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    setTotal(totalItemsInCart());
    window.addEventListener("click", clickedOutside);
    return () => window.removeEventListener("click", clickedOutside);
  }, [cart]);

  return (
    <>
      <nav
        ref={navRef}
        className="z-10 flex justify-between items-center px-4 sticky top-0 md:hidden h-[60px] w-full  bg-white text-black border-b-2 border-neutral-200"
      >
        <div className="flex items-center justify-start gap-4">
          <article
            onClick={() => {
              setOpen(!open);
            }}
            className="menu-btn flex gap-2 flex-col cursor-pointer p-2"
          >
            <div
              className={`line-1 h-[2px] w-[30px] bg-black transition-transform duration-500 ${
                open ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></div>
            <div
              className={`line-2 h-[2px] w-[30px] bg-black transition-all duration-500 ${
                open ? " opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`line-3 h-[2px] w-[30px] bg-black transition-transform duration-500 ${
                open ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></div>
          </article>

          <article className="logo">
            <Link to="/" className="text-xl flex items-center gap-2 text-logo">
              <span className="font-secondary text-2xl">
                <BiPackage />
              </span>
              <p>fakeStore</p>
            </Link>
          </article>
        </div>

        <div className="flex gap-4">
          <article className="avatar">avatar</article>

          <article className="cart relative top-1 right-1">
            <Link to="/cart">
              <div className="group-hover:opactiy-100 scale-[140%]">
                <FaShoppingCart />
              </div>
              <span className="absolute -top-4 -right-4 flex items-center justify-center rounded-full bg-logo text-black opacity-100 h-full w-full p-[11px] text-sm">
                {total}
              </span>
            </Link>
          </article>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileNavbar;
