import React, { useState, useEffect } from "react";
import "./style.scss";
import Navbar from "../../components/navbar";
import Footer from "../footer";
import Home_Data from "./map_data_home";
import product from "../../assets/data";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(product);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home_container">
        <div className="home-Main">
          {data.map((item) => (
            <Home_Data product={item}></Home_Data>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
