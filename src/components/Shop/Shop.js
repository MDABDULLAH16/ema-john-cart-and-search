import Cart from "../Cart/Cart";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  const [products] = useProducts([]);
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (selectedProduct) => {
    let newProduct = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newProduct = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newProduct = [...rest, exists];
    }

    setCart(newProduct);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="order-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
