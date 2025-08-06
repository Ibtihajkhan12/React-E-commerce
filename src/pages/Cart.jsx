import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const subtotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = state.reduce((acc, item) => acc + item.qty, 0);
  const shipping = 30;

  const EmptyCart = () => (
    <motion.div
      className="text-center py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FaShoppingCart size={80} className="text-muted mb-4" />
      <h4>Your Cart is Empty</h4>
      <Link to="/" className="btn btn-outline-dark mt-3">
        <i className="fa fa-arrow-left me-2"></i> Continue Shopping
      </Link>
    </motion.div>
  );

  const ShowCart = () => (
    <motion.section
      className="h-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4 shadow-sm">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Your Cart</h5>
              </div>
              <div className="card-body">
                {state.map((item) => (
                  <div key={item.id}>
                    <div className="row align-items-center mb-3">
                      <div className="col-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-5">
                        <h6>{item.title}</h6>
                        <p className="text-muted mb-1">
                          ${item.price} × {item.qty}
                        </p>
                      </div>
                      <div className="col-4 d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() => removeItem(item)}
                        >
                          <FaMinus />
                        </button>
                        <span>{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary ms-2"
                          onClick={() => addItem(item)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <motion.div
              className="card shadow-sm"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-header bg-light">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    Items ({totalItems})
                    <span>${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Shipping
                    <span>${shipping.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    Total
                    <span>${(subtotal + shipping).toFixed(2)}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="btn btn-dark w-100">
                  Proceed to Checkout
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h2 className="text-center">Shopping Cart</h2>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
