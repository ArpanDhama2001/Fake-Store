import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "../components/CartItem";

const Cartpage = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <article className="w-[80%] mx-auto">
      {cart.value.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        );
      })}
    </article>
  );
};

export default Cartpage;
