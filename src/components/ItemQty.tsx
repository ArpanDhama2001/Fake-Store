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
    <div className="w-[50px] flex flex-col items-center">
      <button
        onClick={() => dispatch(change({ id: props.id, type: "increment" }))}
        className="h-[50px] w-[50px]"
      >
        +
      </button>
      {/* <select
        value={quantity}
        onChange={(e) => {
          setquantity(Number(e.target.value));
        }}
        className="w-[100%]  bg-white text-center py-2 bg-transparent border-2 border-transparent border-solid hover:border-2 hover:border-rose-200 hover:border-solid focus:border-2 focus:border-rose-200 focus:border-solid rounded-lg transition-all duration-200 ease-linear "
      >
        <option value="1" className="bg-white">
          1
        </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select> */}

      <input
        type="text"
        value={quantity}
        onChange={(e) => handleChange(e)}
        className="w-[100%] text-center outline-none"
        disabled
        min={1}
        max={10}
      />
      <button
        onClick={() => dispatch(change({ id: props.id, type: "decrement" }))}
        className="h-[50px] w-[50px]"
      >
        -
      </button>
    </div>
  );
};

export default ItemQty;
