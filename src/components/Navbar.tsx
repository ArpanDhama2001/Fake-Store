import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showCategories, setShowCategories] = React.useState(false);

  return (
    <>
      <nav className="flex justify-center items-center h-[60px] w-[100%] bg-blue-100 sticky top-0 mb-4">
        <div className="flex justify-between items-center w-[80%]">
          <div>
            fake <span>Store</span>
          </div>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowCategories(!showCategories);
                }}
                className="relative"
              >
                Categories {">"}
              </button>
              {showCategories && (
                <ul className="absolute bg-white flex flex-col gap-2 mt-[5px] p-2 shadow-lg rounded-lg">
                  <Link to={`/category/${"electronics"}`}>Electronics</Link>
                  <Link to={`/category/${"jewelery"}`}>Jewelery</Link>
                  <Link to={`/category/${"men's clothing"}`}>
                    Men's Clothing
                  </Link>
                  <Link to={`/category/${"women's clothing"}`}>
                    Women's Clothing
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
