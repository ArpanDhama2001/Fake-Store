import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Item from "../components/Item";
import SkeletonItem from "../components/SkeletonItem";
import { getInCategory } from "../data/api/apiURL";
import { ItemeState } from "../features/productsSlice";

const CategoryPage = () => {
  const { category } = useParams();

  const [items, setItems] = useState<ItemeState[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  async function fetchItems(category: string) {
    try {
      setLoading(true);
      const res = await fetch(getInCategory(category));
      const data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems(category!);
  }, [category]);

  if (loading) {
    return <SkeletonItem />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className=" bg-white p-4 rounded-lg">
      <div className="mx-auto w-full md:w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {items?.map((item: ItemeState): JSX.Element => {
          return (
            <Item
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
              qty={item.qty}
              category={item.category}
              rating={item.rating}
            />
          );
        })}
      </div>
    </main>
  );
};

export default CategoryPage;
