import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import { getAllProductURL } from "../data/api/apiURL";
import { addToCart, ItemeState, setQty } from "../features/cartSlice";
import PrimaryButton from "./PrimaryButton";
import Ratings from "./Ratings";

const Items = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState<ItemeState[] | []>();
  const [clicked, setClicked] = useState<boolean>(false);
  const URL = getAllProductURL();

  const fetchItems = async (): Promise<void> => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.log(e);
    }
  };

  // const storageCart = localStorage.getItem("Basket");
  // const cart = storageCart ? JSON.parse(storageCart) : [];

  const handleClick = (item: ItemeState, id: number): void => {
    dispatch(addToCart(item));
    dispatch(setQty(id));
    // console.log("cart", cart);
    // localStorage.setItem("Basket", JSON.stringify(cart.push(item)));
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center bg-white p-4 shadow-2xl rounded-lg">
        {items?.map((item: ItemeState): JSX.Element => {
          return (
            <article
              key={item.id}
              className="hover:shadow-2xl hover:scale-[107%] relative flex flex-col justify-center gap-4  w-[100%] h-[350px] p-4 rounded-md font-secondary transition-all duration-200"
            >
              <div className="card-head transition-all linear duration-300 group ">
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" h-[150px] mx-auto "
                  />
                </Link>
                <span
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                  className={`z-1 absolute top-6 right-7 ${
                    clicked ? "text-red-500 " : "text-neutral-300"
                  } scale-[140%]  hover:cursor-pointer`}
                >
                  {/* {clicked ? <FaHeart /> : <FiHeart />} */}
                  <FaHeart />
                </span>
              </div>
              <div className="card-body flex flex-col items-center gap-4">
                <div className="text-center">
                  <p className="">
                    {item.title.length > 25
                      ? item.title.substring(0, 25) + "..."
                      : item.title}
                  </p>
                  <p className="text-neutral-400">{item.category}</p>
                </div>
                <div className="flex gap-10 justify-around w-[80%]">
                  <Ratings rate={item.rating?.rate || 0} />
                  <p className="text-neutral-400">|</p>

                  <p className="">${item.price}</p>
                </div>
              </div>
              <div
                onClick={() => handleClick(item, item.id)}
                className="flex gap-4"
              >
                <PrimaryButton width="full" text="Add to Cart" />
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Items;
