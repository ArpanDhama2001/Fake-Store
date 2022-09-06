import React from "react";

const FakeItem = (): JSX.Element => {
  return (
    <article className="h-[350px] w-full p-4 flex gap-4 flex-col items-center justify-center animate-pulse">
      <div className="h-[185.11px] w-full bg-neutral-200 rounded-lg"></div>
      <div className="h-[25px] w-[217px] bg-neutral-200 rounded-lg"></div>
      <div className="h-[25px] w-[190px] bg-neutral-200 rounded-lg -mt-2"></div>
      <div className="h-[25px] w-[270px] bg-neutral-200 rounded-lg"></div>
      <div className="h-[40px] w-full bg-neutral-200 rounded-lg"></div>
    </article>
  );
};

const SkeletonItem = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center bg-white p-4 shadow-2xl rounded-lg">
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
      <FakeItem />
    </section>
  );
};

export default SkeletonItem;
