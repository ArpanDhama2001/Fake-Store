import { useSelector } from "react-redux";
import { RootState } from "../store";
// import { Scrollbars } from "react-custom-scrollbars-2";
import CartItem from "../components/CartItem";
import { ItemeState } from "../features/productsSlice";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:items-start mx-auto sm:w-[90%] lg:w-[80%]">
      <section className="w-[100%] lg:w-[70%] h-[81.35vh] overflow-auto mx-auto rounded-lg lg:flex-grow bg-white p-4">
        {cart.value.length > 0 ? (
          cart.value.map((item: ItemeState): JSX.Element => {
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
          })
        ) : (
          <EmptyCart />
        )}
      </section>

      <CartSummary />
    </section>
  );
};

export default CartContainer;
