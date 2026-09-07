import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart
  } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="cart-page">

        {/* HEADER */}
        <section className="cart-header">
          <p className="eyebrow">
            CYBERFLIX SYSTEMS LLP
          </p>

          <h1>
            SHOPPING CART
          </h1>

          <p>
            Review your selected PC components
            before checkout.
          </p>
        </section>

        {cart.length === 0 ? (

          /* EMPTY CART */
          <section className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <p className="eyebrow">
              YOUR SHOPPING CART
            </p>

            <h2>
              YOUR CART IS EMPTY
            </h2>

            <p>
              You haven't added any PC components yet.
              Explore our store and start building.
            </p>

            <Link
              to="/products"
              className="continue-shopping-btn"
            >
              EXPLORE COMPONENTS →
            </Link>

          </section>

        ) : (

          /* CART */
          <section className="cart-layout">

            {/* ITEMS */}
            <div className="cart-items-section">

              <div className="cart-items-header">

                <div>
                  <span>
                    YOUR COMPONENTS
                  </span>

                  <strong>
                    {totalItems}
                  </strong>
                </div>

                <Link to="/products">
                  + ADD MORE COMPONENTS
                </Link>

              </div>

              <div className="cart-items">

                {cart.map((item) => (

                  <article
                    className="cart-item"
                    key={item.id}
                  >

                    {/* IMAGE */}
                    <div className="cart-item-image">

                      <Link
                        to={`/product/${item.id}`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </Link>

                    </div>

                    {/* INFO */}
                    <div className="cart-item-info">

                      <span className="cart-item-category">
                        {item.category}
                      </span>

                      <h2>
                        {item.name}
                      </h2>

                      <p>
                        {item.brand}
                      </p>

                      <strong className="cart-item-price">
                        ₹
                        {item.price.toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                    </div>

                    {/* QUANTITY */}
                    <div className="cart-quantity">

                      <span>
                        QUANTITY
                      </span>

                      <div className="quantity-controls">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                    {/* TOTAL */}
                    <div className="cart-item-total">

                      <span>
                        TOTAL
                      </span>

                      <strong>
                        ₹
                        {(
                          item.price *
                          item.quantity
                        ).toLocaleString("en-IN")}
                      </strong>

                    </div>

                    {/* REMOVE */}
                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      title="Remove item"
                    >
                      ✕
                    </button>

                  </article>

                ))}

              </div>

            </div>

            {/* SUMMARY */}
            <aside className="cart-summary">

              <p className="eyebrow">
                ORDER SUMMARY
              </p>

              <h2>
                CART TOTAL
              </h2>

              <div className="summary-row">
                <span>
                  Products
                </span>

                <strong>
                  {totalItems}
                </strong>
              </div>

              <div className="summary-row">
                <span>
                  Subtotal
                </span>

                <strong>
                  ₹
                  {cartTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>

              <div className="summary-row">
                <span>
                  Delivery
                </span>

                <strong className="free-text">
                  FREE
                </strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">

                <span>
                  TOTAL
                </span>

                <strong>
                  ₹
                  {cartTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

              <Link
                to="/checkout"
                className="checkout-btn"
              >
                CHECKOUT →
              </Link>

              <Link
                to="/products"
                className="continue-link"
              >
                ← Continue Shopping
              </Link>

              <div className="cart-trust">

                <div>
                  ✓ Secure Checkout
                </div>

                <div>
                  ✓ Genuine Components
                </div>

                <div>
                  ✓ Free Delivery
                </div>

              </div>

            </aside>

          </section>

        )}

      </main>
    </>
  );
}

export default Cart;