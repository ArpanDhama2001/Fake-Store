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
          <button className="w-[300px] flex gap-2 items-center justify-center py-[10px] px-4 bg-primary hover:opacity-90 text-white rounded-lg">
            Continue shoping <FaArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
