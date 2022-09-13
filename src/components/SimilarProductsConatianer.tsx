import { useEffect } from "react";
import { ItemeState } from "../features/productsSlice";
import { addSimilarProducts } from "../features/similarProductsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getSimilarProducts } from "../utilities/getSimilarProducts";
import Item from "./Item";

const SimilarProductsConatianer = () => {
  const dispatch = useAppDispatch();
  let { value: cart } = useAppSelector((state) => state.cart);
  let { value: favItems } = useAppSelector((state) => state.fav);
  let { data: products } = useAppSelector((state) => state.products);
  let { data: similarP } = useAppSelector((state) => state.similarProducts);

  let newArr: ItemeState[] = cart.concat(favItems);

  useEffect(() => {
    dispatch(addSimilarProducts(getSimilarProducts(products, newArr)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!similarP.length) {
    similarP = products.slice(0, 12);
  }

  return (
    <section
      className={`${
        similarP.length ? "" : "hidden"
      } overflow-auto w-full md:w-[80%] bg-white rounded-lg mt-4 p-6 mx-auto divide-y divide-neutral-200`}
    >
      <h2 className="p-4 font-secondary text-xl text-neutral-700 ">
        You might be interested in:
      </h2>

      <div className="flex gap-4">
        {similarP?.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              qty={item.qty}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SimilarProductsConatianer;
