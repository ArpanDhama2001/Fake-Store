import { useDispatch } from "react-redux";
import { ItemeState, remove } from "../features/cartSlice";
import { FaTimes } from "react-icons/fa";
import React from "react";
import ItemQty from "./ItemQty";
import Ratings from "./Ratings";

const CartItem = (props: ItemeState) => {
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    return (event: React.MouseEvent) => {
      dispatch(remove(id));
    };
  };

  return (
    <div className="p-4 flex mt-4 items-center bg-white shadow-2xl rounded-3xl">
      <div className="flex w-[75%] gap-4 ">
        <div className="w-[260px]">
          <img
            src={props.image}
            alt={props.title}
            className="h-[150px] mx-auto"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-between">
          <p>{props.title}</p>
          <Ratings rate={props.rating.rate} />
          <button
            onClick={handleClick(props.id)}
            className="text-gray-500 flex items-center gap-1"
          >
            <span className="relative top-[2px]">
              <FaTimes />
            </span>
            Remove
          </button>
        </div>
      </div>
      <div className="w-[25%] flex gap-2">
        <div className="w-[50%] flex justify-center">
          <ItemQty id={props.id} />
        </div>
        <div className="w-[50%] m-auto">
          <h2 className="">$ {props.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
