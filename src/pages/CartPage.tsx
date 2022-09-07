import CartContainer from "../components/CartContainer";
import SimilarProductsConatianer from "../components/SimilarProductsConatianer";

const Cartpage = () => {
  return (
    <main className="mx-auto">
      <div>
        <CartContainer />
        <SimilarProductsConatianer />
      </div>
    </main>
  );
};

export default Cartpage;
