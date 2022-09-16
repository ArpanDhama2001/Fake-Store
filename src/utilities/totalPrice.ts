import { store } from "../store";

export const totalPrice = (): number => {
  const { cart } = store.getState();
  let total: number = 0;

  // eslint-disable-next-line array-callback-return
  cart.value.map((item) => {
    let one_item_price: number = Math.round(item.qty * item.price * 100) / 100;
    total += one_item_price;
  });
  return Math.round(total * 100) / 100;
};
