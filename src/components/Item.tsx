import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { ItemeState } from "../features/productsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart, setQty } from "../features/cartSlice";
import Ratings from "./Ratings";
import PrimaryButton from "./PrimaryButton";
import { addToFav } from "../features/favouriteSlice";

const Item = (props: ItemeState) => {
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

  const addToFavClickHandler = (item: ItemeState, id: number): void => {
    dispatch(addToFav(item));
  };

  return (
    <article className="hover:shadow-2xl hover:scale-[107%] relative flex flex-col justify-center gap-4  w-[100%] h-[350px] p-4 rounded-md font-secondary transition-all duration-200">
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
          className={`z-1 absolute top-6 right-7 scale-[140%]  hover:cursor-pointer`}
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
        <PrimaryButton width="full" text="Add to Cart" />
      </div>
    </article>
  );
};

export default Item;
