import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllProductURL } from "../data/api/apiURL";

type itemType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Items = () => {
  const [items, setItems] = useState([]);
  const URL = getAllProductURL();

  const fetchItems = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {items.map((item: itemType) => {
          return (
            <article
              key={item.id}
              className="flex flex-col gap-4 shadow-lg w-[100%] p-4 rounded-md"
            >
              <div className="card-head transition-all linear duration-300 group ">
                <Link to={`/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[150px] mx-auto group-hover:h-[200px] transition-all ease-in-out duration-300"
                  />
                </Link>
              </div>
              <div className="card-body flex flex-col gap-4">
                <p className="">
                  {item.title.length > 35
                    ? item.title.substring(0, 35) + "..."
                    : item.title}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaStar className="text-amber-500" />
                    <p>{item.rating.rate}</p>
                  </div>
                  <p>{item.price}</p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-cyan-500 hover:bg-cyan-600 w-[100%] rounded-md text-white py-[7px] transition-all ease-in-out duration-300">
                    + Add to Cart
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Items;