import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { remove } from "../features/cartSlice";
import React from "react";
interface CartItemState {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const QTY = 1;

const CartItem = (props: CartItemState) => {
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    return (event: React.MouseEvent) => {
      dispatch(remove(id));
    };
  };

  return (
    <div className="p-4 flex items-center">
      <div className="flex w-[75%] gap-4 ">
        <div className="w-[260px]">
          <img
            src={props.image}
            alt={props.title}
            className="h-[150px] mx-auto"
          />
        </div>
        <div className="w-[50%]">
          <p>{props.title}</p>
          <div className="flex items-center gap-2">
            <FaStar />
            <p>{props.rating.rate}</p>
          </div>
          <h2 className="">$ {props.price}</h2>
        </div>
      </div>
      <div className="w-[25%] flex gap-2">
        <div className="w-[50%] flex justify-center">
          <button className="">{QTY}</button>
        </div>
        <div className="w-[50%]">
          <button
            onClick={handleClick(props.id)}
            className="bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
