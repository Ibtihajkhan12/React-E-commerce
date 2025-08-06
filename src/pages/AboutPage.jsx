import React from 'react'
import { Footer, Navbar } from "../components";
import { FaMale, FaFemale, FaGem, FaTv } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to our store! We are passionate about delivering the best quality products in fashion, electronics, and jewelry.
          Our mission is to provide an exceptional online shopping experience, ensuring customer satisfaction through quality,
          reliability, and affordability.
        </p>

        <h2 className="text-center py-4">Our Categories</h2>
        <div className="row">
          <Card
            icon={<FaMale size={30} className="mb-2 text-primary" />}
            title="Men's Clothing"
            img="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card
            icon={<FaFemale size={30} className="mb-2 text-danger" />}
            title="Women's Clothing"
            img="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card
            icon={<FaGem size={30} className="mb-2 text-warning" />}
            title="Jewelry"
            img="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card
            icon={<FaTv size={30} className="mb-2 text-success" />}
            title="Electronics"
            img="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

// Reusable Card Component
const Card = ({ icon, title, img }) => (
  <div className="col-md-3 col-sm-6 mb-3 px-3">
    <div
      className="card h-100 shadow-sm border-0"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
      }}
    >
      <img className="card-img-top img-fluid" src={img} alt={title} height={160} />
      <div className="card-body text-center">
        {icon}
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </div>
);

export default AboutPage;