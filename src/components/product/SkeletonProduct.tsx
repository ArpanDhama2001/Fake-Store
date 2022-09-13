import React from "react";

const SkeletonProduct = () => {
  return (
    <main className="flex flex-col md:flex-row md:justify-center md:w-[70%] mx-auto gap-8 animate-pulse">
      <div className="product-image h-[400px] w-full md:w-[300px] lg:w-[500px] md:rounded-lg bg-neutral-200 md:mt-8"></div>
      <div className="flex flex-col md:w-full gap-8 p-4">
        <div className="flex flex-col gap-2">
          <div className="h-[20px] w-[100px] bg-neutral-200 rounded-lg"></div>
          <div className="h-[40px] w-[70%] bg-neutral-200 rounded-lg"></div>
          <div className="h-[25px] w-[200px] bg-neutral-200 rounded-lg"></div>
        </div>
        <div className="description flex flex-col gap-2">
          <div className="h-[25px] w-full bg-neutral-200 rounded-lg"></div>
          <div className="h-[25px] w-full bg-neutral-200 rounded-lg"></div>
          <div className="h-[25px] w-full bg-neutral-200 rounded-lg"></div>
          <div className="h-[25px] w-full bg-neutral-200 rounded-lg"></div>
        </div>
        <div className="price h-[45px] w-[150px] bg-neutral-200 rounded-lg"></div>
        <div className="actions flex flex-col md:flex-row gap-2 px-4">
          <div className="h-[40px] w-full bg-neutral-200 rounded-lg"></div>
          <div className="h-[40px] w-full bg-neutral-200 rounded-lg"></div>
        </div>
      </div>
    </main>
  );
};

export default SkeletonProduct;
