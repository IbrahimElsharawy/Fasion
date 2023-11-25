import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bag from "../assets/item-1.jpg";
import jacket from "../assets/item-2.jpg";
import watch from "../assets/item-3.jpg";
import short from "../assets/item-4.jpg";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "white",
        fontSize: "24px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1240px] mx-auto my-10 py-10 ">
      <div className="mb-8">
        <h2 className="text-center text-2xl md:text-4xl">
          {" "}
          FEATURED PRODUCTS{" "}
        </h2>
        <div className="w-24 h-[2px] bg-black mx-auto mt-3  "></div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="relative group mx-2">
            <img src={bag} alt="bag" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">herschel supply co 25l</h2>
            <p>$75.00</p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2 ">
            <img src={jacket} alt="jacket" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color ">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">denim jacket blue</h2>
            <p>$92.50</p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2 ">
            <img src={watch} alt="watch" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">coach slim easton black</h2>
            <p>$165.90</p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2  ">
            <img src={short} alt="short" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color ">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">frayed denim shorts</h2>
            <p>
              <span className="line-through">$29.50</span>{" "}
              <span className="text-custom-text-color font-normal text-lg">
                $15.90
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2 ">
            <img src={bag} alt="bag" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">herschel supply co 25l</h2>
            <p>$75.00</p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2 ">
            <img src={jacket} alt="jacket" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">denim jacket blue</h2>
            <p>$92.50</p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2">
            <img src={watch} alt="watch" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">coach slim easton black</h2>
            <p>$165.90</p>
          </div>
        </div>

        <div>
          <div className="relative group mx-2 ">
            <img src={short} alt="short" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <NavLink
                to="#"
                className="text-white block mb-2 bg-black py-2 px-4  rounded-full hover:bg-custom-color ease-in duration-300"
              >
                Add to Cart
              </NavLink>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="text-custom-text-color">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="my-2 py-2 text-second-text-color mx-2">
            <h2 className="capitalize mb-2 ">frayed denim shorts</h2>
            <p>
              <span className="line-through">$29.50</span>{" "}
              <span className="text-custom-text-color font-normal ">
                $15.90
              </span>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
