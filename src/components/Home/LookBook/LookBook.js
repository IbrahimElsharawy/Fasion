import React from "react";
import banner from "../../../assets/banner-08.jpg";
import shopItem from "../../../assets/shop-item-09.jpg";
import { NavLink } from "react-router-dom";
import CountDownTimer from "./CountDownTimer";

const LookBook = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
  };

  const shopItemStyle = {
    backgroundImage: `url(${shopItem})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
  };

  return (
    <div className="bg-second-color">
      <div className="max-w-[1240px] mx-auto my-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          <div className="relative w-full" style={bannerStyle}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white">
              <p className="capitalize tracking-widest text-xl md:text-2xl lg:text-3xl font-bold">
                the beauty
              </p>
              <h1 className="capitalize tracking-widest text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                look book
              </h1>
              <NavLink to="#" className="tracking-[.25em] text-lg font-normal">
                view collection
              </NavLink>
            </div>
          </div>

          <div className="w-full relative" style={shopItemStyle}>
            <div className="absolute top-2/3 left-2/3 transform -translate-x-2/3  -translate-y-2/3  w-full text-center ">
              <p className="capitalize mb-2">gafas sol hawkers one</p>
              <p>
                <span className="line-through">$29.50</span>{" "}
                <span className="text-custom-text-color font-normal text-lg">
                  $15.90
                </span>
              </p>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2  -translate-y-6 w-[50%] text-center">
              <CountDownTimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
