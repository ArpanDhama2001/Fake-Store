import React from "react";
import { BiPackage } from "react-icons/bi";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { totalItemsInCart } from "../../utilities/totalItemsInCart";
import Categories from "./Categories";

const DesktopNavbar = () => {
  const cart = useAppSelector((state) => state.cart);

  const [showCategories, setShowCategories] = React.useState(false);
  const [total, setTotal] = React.useState<string>("0");
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTotal(totalItemsInCart());
  }, [cart]);

  return (
    <nav className="hidden md:block z-10 pt-2 h-[90px] w-[100%] bg-white text-black border-b-2 border-neutral-200 sticky top-0 mb-4">
      <div className="w-full flex items-center justify-center">
        <div className="flex justify-between items-center w-[80%] font-secondary">
          <Link to="/" className="text-2xl flex gap-2 text-logo">
            <span className="font-secondary text-3xl">
              <BiPackage />
            </span>
            <p>fakeStore</p>
          </Link>
          <ul className="flex gap-8 items-center ">
            <li>
              <Link
                to="/"
                className={` ${
                  pathname === "/" ? "opacity-100" : "opacity-70"
                } hover:opacity-100`}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowCategories(!showCategories);
                }}
                className="relative flex items-center gap-1 opacity-70 hover:opacity-100 focus:opacity-100"
              >
                Categories <FaAngleDown />
              </button>
              {showCategories && (
                <ul className="absolute bg-white text-black flex flex-col gap-2 mt-[5px] p-2 shadow-lg rounded-lg">
                  <Link
                    to={`/category/${"electronics"}`}
                    className="hover:bg-gray-200 px-2 transition-all linear duration-100"
                  >
                    Electronics
                  </Link>
                  <Link
                    to={`/category/${"jewelery"}`}
                    className="hover:bg-gray-200 px-2 transition-all linear duration-100"
                  >
                    Jewelery
                  </Link>
                  <Link
                    to={`/category/${"men's clothing"}`}
                    className="hover:bg-gray-200 px-2 transition-all linear duration-100"
                  >
                    Men's Clothing
                  </Link>
                  <Link
                    to={`/category/${"women's clothing"}`}
                    className="hover:bg-gray-200 px-2 transition-all linear duration-100"
                  >
                    Women's Clothing
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/favourite"
                className={`${
                  pathname === "/favourite" ? "opacity-100" : "opacity-70"
                } hover:opacity-100 text-xl`}
              >
                <span className="">
                  <FiHeart />
                </span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/cart">
                <div
                  className={`${
                    pathname === "/cart" ? "opacity-100" : "opacity-70"
                  } group-hover:opactiy-100 scale-[140%] `}
                >
                  <FaShoppingCart />
                </div>
                <span className="absolute -top-4 -right-4 flex items-center justify-center rounded-full bg-logo text-black opacity-100 h-full w-full p-[11px] text-sm">
                  {total}
                </span>
              </Link>
            </li>
            <li className="border-[2px] border-neutral-300 py-1 px-2 rounded-lg hover:scale-105 ">
              <button>Login | Signup</button>
            </li>
          </ul>
        </div>
      </div>
      <Categories />
    </nav>
  );
};

export default DesktopNavbar;
