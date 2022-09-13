import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

interface PropsState {
  open: boolean;
  setOpen: any;
}

function Sidebar(props: PropsState) {
  return (
    <div
      className={`py-4 shadow-[20px_35px_60px_-15px_rgba(0,0,0,0.3)] ${
        props.open
          ? "translate-x-0 opacity-100"
          : "translate-x-[-310px] opacity-0"
      } text-black w-[300px] h-[100vh] max-h-[100vh] overflow-auto bg-white fixed z-50 font-secondary transition-all duration-300 divide-y `}
    >
      <Link
        onClick={() => props.setOpen(false)}
        to="/"
        className="p-4 text-xl flex justify-between items-center w-[90%]"
      >
        <h2>Home</h2>
        <span>
          <AiFillHome />
        </span>
      </Link>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-xl">Top Categories For You</h2>
        <Link
          onClick={() => props.setOpen(false)}
          to="/category/men's clothing"
        >
          Men's Clothing
        </Link>
        <Link
          onClick={() => props.setOpen(false)}
          to="/category/women's clothing"
        >
          Women's Clothing
        </Link>
        <Link onClick={() => props.setOpen(false)} to="/category/electronics">
          Electronics
        </Link>
        <Link onClick={() => props.setOpen(false)} to="/category/jewlery">
          Jewelery
        </Link>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-xl">Personal</h2>
        <Link
          onClick={() => props.setOpen(false)}
          to="/favourite"
          className="flex justify-between items-center w-[90%]"
        >
          <h2>Wishlist</h2>
          <FaHeart />
        </Link>
        <Link
          onClick={() => props.setOpen(false)}
          to="/cart"
          className="flex justify-between items-center w-[90%]"
        >
          <h2>Cart</h2>
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
