import React from "react";
import cover from "../../assets/cover.jpg";
import { NavLink } from "react-router-dom";
import Products from "../Features/Features";
import LookBook from "./LookBook/LookBook";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import FollowUs from "./FollowUs/FollowUs";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <div
        className="w-full h-[600px] relative text-white "
        style={containerStyle}
      >
        <div
          className="w-full h-full relative z-10"
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <p className="capitalize tracking-wider">woman collection 2023</p>
            <h1 className="my-8 text-2xl md:text-4xl font-bold uppercase ">
              new arrivals
            </h1>
            <NavLink
              className="border py-2 px-4 rounded-3xl	uppercase transition-all duration-300 hover:bg-custom-color hover:text-white"
              to="/Features"
            >
              Shop now
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Products />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <LookBook />
      </div>
      <div>
        <FollowUs />
      </div>
    </div>
  );
};

export default Home;
