import { useAppSelector } from "../hooks";
import { shuffle } from "../utilities/getSimilarProducts";
import Item from "./Item";

const FakeSuggestions = () => {
  let products = useAppSelector((state) => state.products.data);

  products = shuffle(products).slice(0, 8);

  return (
    <>
      {products?.map((item, index) => {
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
    </>
  );
};

export default FakeSuggestions;
