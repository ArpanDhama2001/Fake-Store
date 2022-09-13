import { Link } from "react-router-dom";
import "./categories.css";

function Categories() {
  return (
    <section className="bg-white mx-auto flex w-[80%] justify-evenly pt-4 text-sm font-secondary">
      <Link to="/category/men's clothing" className="cat-btn">
        Men's Clothing
      </Link>
      <Link to="/category/women's clothing" className="cat-btn">
        Women's Clothing
      </Link>
      <Link to="/category/electronics" className="cat-btn">
        Electronics
      </Link>
      <Link to="/category/jewelery" className="cat-btn">
        Jewelery
      </Link>
    </section>
  );
}

export default Categories;
