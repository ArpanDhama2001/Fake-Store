import React from "react";
import { FaStar } from "react-icons/fa";

const Ratings = (props: { rate: number }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="relative -top-[2px] text-amber-500">
        <FaStar />
      </span>
      <p>{props.rate}</p>
    </div>
  );
};

export default Ratings;
