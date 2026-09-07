import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../CartContext";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="product-not-found">
          <p className="eyebrow">
            CYBERFLIX SYSTEMS LLP
          </p>

          <h1>PRODUCT NOT FOUND</h1>

          <p>
            The component you're looking for
            doesn't exist.
          </p>

          <Link
            to="/products"
            className="checkout-btn"
          >
            ← BACK TO COMPONENTS
          </Link>
        </main>
      </>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    alert(
      `${product.name} added to cart!`
    );
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/checkout");
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="product-details-page">

        {/* BREADCRUMB */}
        <div className="product-breadcrumb">
          <Link to="/">
            Home
          </Link>

          <span>→</span>

          <Link to="/products">
            Components
          </Link>

          <span>→</span>

          <strong>
            {product.name}
          </strong>
        </div>

        {/* MAIN PRODUCT */}
        <section className="product-details">

          {/* IMAGE */}
          <div className="product-details-image">

            <div className="details-image-badge">
              <span>✓</span>
              GENUINE PRODUCT
            </div>

            <span className="details-category">
              {product.category}
            </span>

            <div className="details-image-glow"></div>

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

          {/* INFO */}
          <div className="product-details-info">

            <p className="eyebrow">
              CYBERFLIX SYSTEMS LLP
            </p>

            <p className="details-brand">
              {product.brand}
            </p>

            <h1>
              {product.name}
            </h1>

            {/* RATING */}
            <div className="details-rating">

              <span>
                ★★★★★
              </span>

              <strong>
                4.8
              </strong>

              <small>
                128 Reviews
              </small>

            </div>

            {/* PRICE */}
            <div className="details-price">
              ₹
              {product.price.toLocaleString(
                "en-IN"
              )}
            </div>

            {/* STOCK */}
            <div className="details-stock">
              <span>✓</span>
              IN STOCK
            </div>

            {/* DESCRIPTION */}
            <p className="details-description">
              Premium{" "}
              {product.category.toLowerCase()}{" "}
              component from{" "}
              {product.brand}, designed for
              reliable performance, gaming and
              high-performance PC builds.
            </p>

            {/* FEATURES */}
            <div className="details-features">

              <div>
                <span>✓</span>

                <p>
                  <strong>
                    Genuine Product
                  </strong>

                  <small>
                    100% authentic component
                  </small>
                </p>
              </div>

              <div>
                <span>✓</span>

                <p>
                  <strong>
                    Secure Packaging
                  </strong>

                  <small>
                    Safe delivery protection
                  </small>
                </p>
              </div>

              <div>
                <span>✓</span>

                <p>
                  <strong>
                    Free Delivery
                  </strong>

                  <small>
                    Delivery across India
                  </small>
                </p>
              </div>

            </div>

            {/* PURCHASE */}
            <div className="details-purchase">

              <div className="details-quantity">

                <span>
                  QUANTITY
                </span>

                <div className="quantity-controls">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        Math.max(
                          1,
                          quantity - 1
                        )
                      )
                    }
                  >
                    −
                  </button>

                  <strong>
                    {quantity}
                  </strong>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="details-buttons">

                <button
                  type="button"
                  className="details-add-btn"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>

                <button
                  type="button"
                  className="details-buy-btn"
                  onClick={handleBuyNow}
                >
                  BUY NOW →
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* SPECIFICATIONS */}
        <section className="product-specifications">

          <div className="spec-header">

            <p className="eyebrow">
              PRODUCT INFORMATION
            </p>

            <h2>
              SPECIFICATIONS
            </h2>

          </div>

          <div className="spec-grid">

            <div className="spec-item">
              <span>
                PRODUCT
              </span>

              <strong>
                {product.name}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                BRAND
              </span>

              <strong>
                {product.brand}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                CATEGORY
              </span>

              <strong>
                {product.category}
              </strong>
            </div>

            <div className="spec-item">
              <span>
                AVAILABILITY
              </span>

              <strong className="spec-stock">
                ✓ IN STOCK
              </strong>
            </div>

          </div>

        </section>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="related-products">

            <div className="spec-header">

              <p className="eyebrow">
                YOU MAY ALSO LIKE
              </p>

              <h2>
                RELATED COMPONENTS
              </h2>

            </div>

            <div className="related-grid">

              {relatedProducts.map((item) => (

                <Link
                  to={`/product/${item.id}`}
                  className="related-card"
                  key={item.id}
                >

                  <div className="related-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>

                  <div className="related-info">

                    <span>
                      {item.brand}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <strong>
                      ₹
                      {item.price.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                </Link>

              ))}

            </div>

          </section>
        )}

      </main>
    </>
  );
}

export default ProductDetails;