import { useEffect } from "react";
import { fetchProducts, ItemeState } from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import Item from "./Item";
import { STATUS } from "../features/productsSlice";
import SkeletonItem from "./SkeletonItem";

const Items = () => {
  const dispatch = useAppDispatch();
  const { data: items, status } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUS.loading) {
    return <SkeletonItem />;
  }
  if (status === STATUS.error) {
    return <h1>Error..</h1>;
  }
  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center bg-white p-4 shadow-2xl rounded-lg">
        {items?.map((item: ItemeState): JSX.Element => {
          return (
            <Item
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
              qty={item.qty}
              category={item.category}
              rating={item.rating}
            />
          );
        })}
      </section>
    </>
  );
};

export default Items;
