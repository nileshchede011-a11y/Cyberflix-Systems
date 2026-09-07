import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function OrderSuccess() {
  const savedOrderId = localStorage.getItem("latestOrderId");

  const orderId =
    savedOrderId ||
    `CFX${Date.now().toString().slice(-8)}`;

  return (
    <>
      <Navbar />

      <main className="success-page">
        <section className="success-card">

          <div className="success-icon">
            ✓
          </div>

          <p className="eyebrow">
            CYBERFLIX SYSTEMS LLP
          </p>

          <h1>
            ORDER PLACED
          </h1>

          <h2>
            SUCCESSFULLY!
          </h2>

          <p className="success-message">
            Thank you for shopping with Cyberflix Systems LLP.
            Your PC components order has been received successfully.
          </p>

          <div className="order-id-box">
            <span>
              ORDER ID
            </span>

            <strong>
              {orderId}
            </strong>
          </div>

          <div className="success-info">

            <div>
              <span>✓</span>

              <p>
                <strong>
                  Order Confirmed
                </strong>

                <small>
                  Your order has been successfully placed.
                </small>
              </p>
            </div>

            <div>
              <span>✓</span>

              <p>
                <strong>
                  Secure Processing
                </strong>

                <small>
                  Your order is being prepared for dispatch.
                </small>
              </p>
            </div>

            <div>
              <span>✓</span>

              <p>
                <strong>
                  Cash on Delivery
                </strong>

                <small>
                  Pay when your order arrives.
                </small>
              </p>
            </div>

          </div>

          <div className="success-actions">

            <Link
              to="/products"
              className="success-primary-btn"
            >
              CONTINUE SHOPPING →
            </Link>

            <Link
              to="/pc-builder"
              className="success-secondary-btn"
            >
              BUILD ANOTHER PC
            </Link>

          </div>

          <p className="success-footer">
            Need help? Contact Cyberflix Systems LLP support.
          </p>

        </section>
      </main>
    </>
  );
}

export default OrderSuccess;