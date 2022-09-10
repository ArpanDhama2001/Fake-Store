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
      className={`py-4 ${
        props.open ? "translate-x-0" : "translate-x-[-310px]"
      } text-white w-[300px] h-[100vh] bg-gradient-to-br from-gradient1 to-gradient2 fixed z-50 font-secondary transition-transform duration-300 divide-y `}
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
        <Link onClick={() => props.setOpen(false)} to="/">
          Men's Clothing
        </Link>
        <Link onClick={() => props.setOpen(false)} to="/">
          Women's Clothing
        </Link>
        <Link onClick={() => props.setOpen(false)} to="/">
          Electronics
        </Link>
        <Link onClick={() => props.setOpen(false)} to="/">
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
