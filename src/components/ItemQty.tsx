import React from "react";

const ItemQty = () => {
  return (
    <div className="w-[50px]">
      <button className="h-[50px] w-[50px]">+</button>
      <input type="text" value={1} className="w-[100%]" />
      <button className="h-[50px] w-[50px]">-</button>
    </div>
  );
};

export default ItemQty;
