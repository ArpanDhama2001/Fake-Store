import { store } from "../store";

export const totalItemsInCart = (): string => {
  const { cart } = store.getState();
  let total: number = 0;

  cart.value.map((item) => {
    total += item.qty;
  });

  if (total > 99) return "99+";
  else return `${total}`;
};
