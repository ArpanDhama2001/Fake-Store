import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { ItemeState } from "../features/productsSlice";
import Ratings from "./Ratings";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart, setQty } from "../features/cartSlice";
import PrimaryButton from "./PrimaryButton";

const Item = (props: ItemeState) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.products);

  const [clicked, setClicked] = useState<boolean>(false);

  const requiredItem = (id: number): ItemeState => {
    // let item: ItemeState[] = items.data.filter((item) => item.id === id);
    // return item[0];
    return items.data.filter((item) => item.id === id)[0];
  };

  const handleClick = (item: ItemeState, id: number): void => {
    dispatch(addToCart(item));
    dispatch(setQty(id));
  };

  return (
    <article className="hover:shadow-2xl hover:scale-[107%] relative flex flex-col justify-center gap-4  w-[100%] h-[350px] p-4 rounded-md font-secondary transition-all duration-200">
      <div className="card-head transition-all linear duration-300 group ">
        <Link to={`/products/${props.id}`}>
          <img
            src={props.image}
            alt={props.title}
            className=" h-[150px] mx-auto "
          />
        </Link>
        <span
          onClick={() => {
            setClicked(!clicked);
          }}
          className={`z-1 absolute top-6 right-7 ${
            clicked ? "text-red-500 " : "text-neutral-300"
          } scale-[140%]  hover:cursor-pointer`}
        >
          {/* {clicked ? <FaHeart /> : <FiHeart />} */}
          <FaHeart />
        </span>
      </div>
      <div className="card-body flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="">
            {props.title.length > 25
              ? props.title.substring(0, 25) + "..."
              : props.title}
          </p>
          <p className="text-neutral-400">{props.category}</p>
        </div>
        <div className="flex gap-10 justify-around w-[80%]">
          <Ratings rate={props.rating?.rate || 0} />
          <p className="text-neutral-400">|</p>

          <p className="">${props.price}</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(requiredItem(props.id), props.id)}
        className="flex gap-4"
      >
        <PrimaryButton width="full" text="Add to Cart" />
      </div>
    </article>
  );
};

export default Item;
