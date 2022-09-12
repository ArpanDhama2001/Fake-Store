import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="p-4 h-[100%] w-[100%] flex justify-center items-center">
      <div className="font-secondary flex flex-col items-center">
        <div className="text-center mb-4 text-neutral-400">
          <h2 className="text-6xl lg:text-8xl">hmmm...?</h2>
          <h4 className="">Looks like your cart is Empty</h4>
        </div>
        <Link to="/">
          <button className="w-[300px] flex gap-2 items-center justify-center py-[10px] px-4 text-logo rounded-full border-2 border-logo hover:border-x-4 transition-all duration-300">
            Continue shoping{" "}
            <span className="text-logo">
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
