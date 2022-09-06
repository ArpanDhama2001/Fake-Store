import { removeFromFav } from "../features/favouriteSlice";
import { ItemeState } from "../features/productsSlice";
import { FaTimes } from "react-icons/fa";
import Ratings from "./Ratings";
import { useAppDispatch, useAppSelector } from "../hooks";
import Button from "./Button";
import { addToCart, setQty } from "../features/cartSlice";

const FavItem = (props: ItemeState) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const requiredItem = (id: number): ItemeState => {
    let product = products.data.filter((item) => item.id === id)[0];
    return product;
  };

  const addToCartClickHandler = (item: ItemeState, id: number): void => {
    dispatch(addToCart(item));
    dispatch(setQty(id));
  };

  return (
    <article className="py-4 flex items-center last:border-none border-b border-gray-200 text-neutral-400 font-secondary">
      <div className="item-image w-[300px]">
        <img
          src={props.image}
          alt={props.title}
          className="h-[150px] mx-auto"
        />
      </div>
      <div className="item-body flex flex-grow gap-4 flex-col">
        <div className="item-body-head pl-4 flex justify-between">
          <div>
            <p className="font-secondary text-xl text-neutral-600 text-[18px]">
              {props.title}
            </p>
            <div className="flex text-base pt-2">
              <p className="pr-2">${props.price}</p>
              <span className="px-2 border-x-2 border-stone-100">
                <Ratings rate={props.rating.rate} />
              </span>
              <button className="ml-2 px-2 font-primary text-neutral-500 bg-neutral-200 ">
                {props.category}
              </button>
            </div>
          </div>
        </div>
        <div className="item-total flex justify-between items-center pl-4">
          <div className="flex gap-2 items-center">
            <div
              onClick={() =>
                addToCartClickHandler(requiredItem(props.id), props.id)
              }
            >
              <Button primary width="full" text="Add to Cart" />
            </div>
            <button
              onClick={() => dispatch(removeFromFav(props.id))}
              className="flex gap-2 items-center justify-center px-4 py-[10px] cursor-pointer hover:cursor-pointer border-2 border-neutral-200 rounded-lg active:scale-[90%]"
            >
              <FaTimes /> Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FavItem;
