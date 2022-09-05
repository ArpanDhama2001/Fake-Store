import { useEffect } from "react";
import { fetchProducts, ItemeState } from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import Item from "./Item";

const Items = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center bg-white p-4 shadow-2xl rounded-lg">
        {items.data?.map((item: ItemeState): JSX.Element => {
          return (
            <Item
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
              qty={item.qty}
              fav={item.fav}
              rating={item.rating}
            />
          );
        })}
      </section>
    </>
  );
};

export default Items;
