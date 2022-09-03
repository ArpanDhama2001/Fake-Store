import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "../components/CartItem";
import { ItemeState } from "../features/cartSlice";

const Cartpage = () => {
  const cart = useSelector((state: RootState) => state.cart);
  // cart.value && localStorage.setItem("Cart", JSON.stringify(cart));
  // const storedItems: any = JSON.parse(localStorage.getItem("Basket") || "");

  return (
    <article className="w-[80%] mx-auto">
      {cart.value.map((item: ItemeState): JSX.Element => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            qty={item.qty}
          />
        );
      })}
    </article>
  );
};

export default Cartpage;
