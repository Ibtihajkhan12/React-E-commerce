import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = [...products, product];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    Swal.fire("Success", "Product added!", "success");
    setProduct({ title: "", description: "", price: "", category: "", image: "" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="admin-navbar">
        <div className="navbar-brand">Admin Panel</div>
        <ul className="navbar-links">
          <li><a href="/">🏠 Home</a></li>
        </ul>
      </nav>

      <div className="container my-5">
        <h2 className="mb-4 text-center">Admin - Add Product</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <input name="title" value={product.title} onChange={handleChange} placeholder="Title" required />
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
          <input name="price" value={product.price} onChange={handleChange} placeholder="Price" type="number" required />
          <input name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
          <input name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
          <button type="submit">Add Product</button>
        </form>

        <h3 className="mt-5 text-center">All Products</h3>
        <div className="product-list mt-3">
          {products.length === 0 ? (
            <p className="text-center">No products added yet.</p>
          ) : (
            products.map((p, index) => (
              <div key={index} className="product-card">
                <img src={p.image} alt={p.title} />
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  <p><strong>Price:</strong> ${p.price}</p>
                  <p><strong>Category:</strong> {p.category}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;