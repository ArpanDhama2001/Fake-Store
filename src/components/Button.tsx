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
      className={`${width === "full" ? "w-full" : `w-[${width}]`} ${
        disabled
          ? "opacity-80 hover:opacity-80 cursor-default"
          : "hover:opacity-90"
      } ${
        primary
          ? "bg-primary text-white"
          : "bg-white text-neutral-400 border-2 border-neutral-200"
      } py-[10px] px-4  rounded-lg font-secondary active:scale-[98%]`}
    >
      {text}
    </button>
  );
};

export default Button;
