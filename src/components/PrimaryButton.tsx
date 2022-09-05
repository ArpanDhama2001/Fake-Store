import React from "react";

const PrimaryButton = ({ text, width }: { text: string; width: string }) => {
  return (
    <button
      className={`${
        width === "full" ? "w-full" : `w-[${width}]`
      } py-[10px] px-4 bg-primary hover:opacity-90 text-white rounded-lg font-secondary active:scale-[98%]`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
