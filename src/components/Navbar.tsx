import React from "react";
import { FaAngleDown, FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../store";
import { totalItemsInCart } from "../utilities/totalItemsInCart";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const [showCategories, setShowCategories] = React.useState(false);
  const [total, setTotal] = React.useState<string>("0");
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTotal(totalItemsInCart());
  }, [cart]);

  return (
    <>
      <nav className="z-10 flex justify-center items-center h-[60px] w-[100%] bg-primary text-white sticky top-0 mb-4">
        <div className="flex justify-between items-center w-[80%] font-secondary">
          <Link to="/" className="text-xl flex gap-2">
            <span className="font-secondary text-2xl">
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
                } hover:opacity-100`}
              >
                <span className="">
                  <FaHeart />
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
                <span className="absolute -top-4 -right-4 flex items-center justify-center rounded-full bg-accent text-white opacity-100 h-full w-full p-[11px] text-sm">
                  {total}
                </span>
              </Link>
            </li>
            <li className="border-[2px] border-neutral-300 py-1 px-2 rounded-lg hover:scale-105 ">
              <button>Login | Signup</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
