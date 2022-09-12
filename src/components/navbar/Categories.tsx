import "./categories.css";

function Categories() {
  return (
    <section className="bg-white mx-auto flex w-[80%] justify-evenly pt-4 text-sm font-secondary">
      <div className="cat-btn">Men's Clothing</div>
      <div className="cat-btn">Women's Clothing</div>
      <div className="cat-btn">Electronics</div>
      <div className="cat-btn">Jewelery</div>
    </section>
  );
}

export default Categories;
