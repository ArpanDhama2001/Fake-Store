import { remove } from "../features/cartSlice";
import { ItemeState } from "../features/productsSlice";
import { FaTrash } from "react-icons/fa";
import React from "react";
import ItemQty from "./ItemQty";
import Ratings from "./Ratings";
import { useDispatch } from "react-redux";

const CartItem = (props: ItemeState) => {
  const dispatch = useDispatch();

  return (
    <article className="py-4 flex items-center last:border-none border-b border-gray-200 text-neutral-400 font-secondary">
      <div className="item-image w-[260px]">
        <img
          src={props.image}
          alt={props.title}
          className="h-[150px] mx-auto"
        />
      </div>
      <div className="item-body flex flex-grow gap-4 flex-col">
        <div className="item-body-head pl-4 flex justify-between">
          <div>
            <p className="font-secondary text-lg text-neutral-600 text-[18px]">
              {props.title.substring(0, 20) + "..."}
            </p>
            <div className="flex text-base pt-2">
              <p className="pr-2">${props.price}</p>
              <span className="pl-2 border-l-2 border-stone-100">
                <Ratings rate={props.rating.rate} />
              </span>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <p className="text-black text-xl font-[550] font-primary">
              ${Math.round(props.qty * props.price * 100) / 100}
            </p>
          </div>
        </div>
        <div className="item-total flex justify-between items-center pl-4">
          <ItemQty id={props.id} />
          <div className="flex items-center">
            <span
              onClick={() => dispatch(remove(props.id))}
              className="flex gap-2 px-2 items-center cursor-pointer hover:cursor-pointer"
            >
              <FaTrash />
              <p>Delete</p>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
