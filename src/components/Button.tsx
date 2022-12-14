import React from "react";

const Button = ({
  text,
  width,
  primary = false,
  disabled = false,
}: {
  text: string;
  width: string;
  primary: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`btn-main ${width === "full" ? "w-full" : `w-[${width}]`} ${
        disabled
          ? "opacity-80 hover:opacity-80 cursor-default"
          : "hover:opacity-90"
      } ${
        primary
          ? "border-2 border-black text-black"
          : " text-neutral-400 border-2 border-neutral-200"
      } bg-white py-[10px] px-4  rounded-full font-secondary active:scale-[98%] transition-all duration-200`}
    >
      <p className="">{text}</p>
    </button>
  );
};

export default Button;
