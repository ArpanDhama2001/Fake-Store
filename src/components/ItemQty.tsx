import React, { useState } from "react";

const ItemQty = () => {
  const [qty, setQty] = useState<number>(1);
  console.log(qty);

  return (
    <div className="w-[50px] flex flex-col items-center">
      <button className="h-[50px] w-[50px]">+</button>
      {/* <select
        value={qty}
        onChange={(e) => {
          setQty(Number(e.target.value));
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
        value={qty}
        onChange={(e) => {
          setQty(Number(e.target.value));
        }}
        className="w-[100%] text-center outline-none"
      />
      <button className="h-[50px] w-[50px]">-</button>
    </div>
  );
};

export default ItemQty;
