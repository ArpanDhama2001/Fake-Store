import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ItemeState } from "../features/productsSlice";
import FavItem from "./FavItem";
import EmptyFavList from "./EmptyFavList";

const FavContainer = () => {
  const products = useSelector((state: RootState) => state.fav);

  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:items-start mx-auto sm:w-[90%] lg:w-[80%]">
      <section className="w-[100%] lg:w-[70%] h-[81.35vh] overflow-auto mx-auto rounded-lg lg:flex-grow bg-white p-4">
        {products.value.length > 0 ? (
          products.value.map((item: ItemeState): JSX.Element => {
            return (
              <FavItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                qty={item.qty}
                description={item.description}
                category={item.category}
              />
            );
          })
        ) : (
          <EmptyFavList />
        )}
      </section>
    </section>
  );
};

export default FavContainer;
