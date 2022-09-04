import { useSelector } from "react-redux";
import { RootState } from "../store";
// import { Scrollbars } from "react-custom-scrollbars-2";
import CartItem from "../components/CartItem";
import { ItemeState } from "../features/cartSlice";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <section className="sm:w-[100%] lg:w-[80%] lg:mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 items-start md:w mx-auto">
        <section className="sm:w-[90%] lg:w-[70%] max-h-[81.35vh] overflow-auto mx-auto rounded-lg flex-grow bg-white p-4">
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
      </div>
    </section>
  );
};

export default CartContainer;
