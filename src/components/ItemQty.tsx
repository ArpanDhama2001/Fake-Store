import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, CartState } from "../features/cartSlice";
import { RootState } from "../store";

interface Props {
  id: number;
}

const ItemQty = (props: Props) => {
  const cart: CartState = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(1);

  const productQty = () => {
    cart.value.map((item) => {
      if (item.id === props.id) setQuantity(item.qty);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  useEffect(() => {
    productQty();
  }, [cart]);

  return (
    <div className="w-[90px] flex justify-center gap-4 border-2 border-solid border-neutral-200 rounded-lg items-center">
      <button
        onClick={() => dispatch(change({ id: props.id, type: "decrement" }))}
        className="text-xl"
      >
        -
      </button>

      <p className="text-md text-neutral-600">{quantity}</p>
      <button
        onClick={() => dispatch(change({ id: props.id, type: "increment" }))}
        className="text-lg"
      >
        +
      </button>
    </div>
  );
};

export default ItemQty;
