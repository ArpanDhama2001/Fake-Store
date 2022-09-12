import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmptyFavList = () => {
  return (
    <section className="p-4 h-[100%] w-[100%] flex justify-center items-center">
      <div className="font-secondary flex flex-col items-center">
        <div className="text-center mb-4 text-neutral-400">
          <h2 className="mb-4 text-6xl lg:text-8xl">-_-</h2>
          <h4 className="">There's so much space in here!</h4>
          <h4 className="">It could be filled with your great ideas.</h4>
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

export default EmptyFavList;
