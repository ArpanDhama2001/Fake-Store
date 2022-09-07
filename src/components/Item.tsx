import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { ItemeState } from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart, remove, setQty } from "../features/cartSlice";
import Ratings from "./Ratings";
import Button from "./Button";
import { addToFav, removeFromFav } from "../features/favouriteSlice";

const Item = (props: ItemeState) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const favProducts = useAppSelector((state) => state.fav);
  const cartProducts = useAppSelector((state) => state.cart);

  const isFav = (id: number): boolean => {
    let item = favProducts.value.filter((item) => item.id === id);
    return item.length ? true : false;
  };

  const isInCart = (id: number): boolean => {
    let item = cartProducts.value.filter((item) => item.id === id);
    return item.length ? true : false;
  };

  const requiredItem = (id: number): ItemeState => {
    let product = products.data.filter((item) => item.id === id)[0];
    return product;
  };

  const addToCartClickHandler = (item: ItemeState, id: number): void => {
    if (!isInCart(id)) {
      dispatch(addToCart(item));
      dispatch(setQty(id));
    } else {
      dispatch(remove(id));
    }
  };

  const addToFavClickHandler = (item: ItemeState, id: number): void => {
    !isFav(id) ? dispatch(addToFav(item)) : dispatch(removeFromFav(id));
  };

  return (
    <article className=" hover:scale-[110%] relative flex flex-col justify-center gap-4  min-w-[290px] w-[100%] h-[350px] p-4 rounded-md font-secondary transition-all duration-200">
      <div className="card-head transition-all linear duration-300 group ">
        <Link to={`/products/${props.id}`}>
          <img
            src={props.image}
            alt={props.title}
            className=" h-[150px] mx-auto "
          />
        </Link>
        <span
          onClick={() => {
            addToFavClickHandler(requiredItem(props.id), props.id);
          }}
          className={`z-1 p-2 ${
            isFav(props.id) ? "text-red-500" : "text-neutral-400"
          } absolute top-4 right-4 scale-[140%] active:scale-110 hover:cursor-pointer`}
        >
          <FaHeart />
        </span>
      </div>
      <div className="card-body flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="">
            {props.title.length > 25
              ? props.title.substring(0, 25) + "..."
              : props.title}
          </p>
          <p className="text-neutral-400">{props.category}</p>
        </div>
        <div className="flex gap-10 justify-around w-[80%]">
          <Ratings rate={props.rating?.rate || 0} />
          <p className="text-neutral-400">|</p>

          <p className="">${props.price}</p>
        </div>
      </div>
      <div
        onClick={() => {
          addToCartClickHandler(requiredItem(props.id), props.id);
        }}
        className="flex gap-4"
      >
        {!isInCart(props.id) ? (
          <Button primary width="full" text="Add to Cart" />
        ) : (
          <Button primary={false} width="full" text="Remove from Cart" />
        )}
      </div>
    </article>
  );
};

export default Item;
