import React from "react";
import bgBlog from "../../assets/blog.jpg";
import blogData from "../../blogData/dataBlog.js";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import FPWhiteshirt from "../../assets/item-16.jpg";
import FPBlackCanvas from "../../assets/item-17.jpg";
import FPWatch from "../../assets/item-08.jpg";
import FPJacket from "../../assets/item-03.jpg";
import FPWatchS from "../../assets/item-05.jpg";
import formatCurrency from "../FormatCurrency/FormatCurrency";

const Blog = () => {
  const bgStyle = {
    backgroundImage: `url(${bgBlog})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="w-full h-[250px] relative text-white" style={bgStyle}>
        <div
          className="w-full h-full relative z-10"
          style={{ backgroundColor: "rgba(0,0,0,.6)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h2 className="text-2xl md:text-4xl font-bold uppercase">Blog</h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto my-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {blogData.map((post, index) => (
              <div key={index} className="mb-4 md:mb-6 p-4">
                <img
                  src={post.img}
                  alt={`Blog post ${index}`}
                  className="object-cover w-full h-auto  "
                />
                <div className="my-6">
                  <Link
                    to="#"
                    className="text-xl md:text-3xl hover:text-custom-text-color transition duration-300 ease-in-out"
                  >
                    Black Friday Guide: Best Sales & Discount Codes
                  </Link>
                  <p className="mt-2 text-third-text-color">{post.comments}</p>
                </div>
                <p className="w-full text-third-text-color mb-4">{post.desc}</p>
                <button className="flex items-center text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                  <Link to="#"> Continue Reading</Link>
                  <span className="ml-2">
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </div>
            ))}

            <div className="p-4 flex space-x-4">
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                <Link to="#">1</Link>
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-third-border-color text-black rounded-full hover:bg-black hover:text-white transition duration-300 ease-in-out">
                <Link to="#">2</Link>
              </button>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="p-4">
              <div className="relative mb-16">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
                <FaSearch className="absolute top-2 left-3 text-gray-500" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-8">
                  Categories
                </h2>
                <div className="flex flex-col  items-start text-third-text-color ">
                  <button className=" hover:text-custom-text-color transition duration-300 ease-in-out mb-4 ">
                    <Link to="#">Fashion</Link>
                  </button>
                  <button className=" hover:text-custom-text-color transition duration-300 ease-in-out mb-4 ">
                    <Link to="#">Beauty</Link>
                  </button>
                  <button className=" hover:text-custom-text-color transition duration-300 ease-in-out mb-4">
                    <Link to="#">Street Style</Link>
                  </button>
                  <button className=" hover:text-custom-text-color transition duration-300 ease-in-out mb-4">
                    <Link to="#">Life Style</Link>
                  </button>
                  <button className=" hover:text-custom-text-color transition duration-300 ease-in-out ">
                    <Link to="#">DIY & Crafts</Link>
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-8 mt-16">
                  Featured Products
                </h2>
                <div>
                  <div className="grid grid-cols-2 mb-8  ">
                    <div>
                      <img
                        src={FPWhiteshirt}
                        alt="FPWhiteshirt"
                        className="h-[120px] w-[130px] object-full "
                      />
                    </div>
                    <div className="p-4">
                      <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                        <Link>White Shirt With Pleat Detail Back</Link>
                      </button>
                      <p className="text-third-text-color text-center mt-4">
                        {formatCurrency(19)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  mb-8">
                    <div>
                      <img
                        src={FPBlackCanvas}
                        alt="FPBlackCanvas"
                        className="h-[120px] w-[130px] object-full"
                      />
                    </div>
                    <div className="p-4">
                      <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                        <Link>Converse All Star Hi Black Canvas</Link>
                      </button>
                      <p className="text-third-text-color text-center mt-4">
                        {formatCurrency(39)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  mb-8 ">
                    <div>
                      <img
                        src={FPWatch}
                        alt="FPWatch"
                        className="h-[120px] w-[130px] object-full"
                      />
                    </div>
                    <div className="p-4">
                      <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                        <Link>White Shirt With Pleat Detail Back</Link>
                      </button>
                      <p className="text-third-text-color text-center mt-4">
                        {formatCurrency(19)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  mb-8 ">
                    <div>
                      <img
                        src={FPJacket}
                        alt="FPJacket"
                        className="h-[120px] w-[130px] object-full "
                      />
                    </div>
                    <div className="p-4">
                      <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                        <Link>White Shirt With Pleat Detail Back</Link>
                      </button>
                      <p className="text-third-text-color text-center mt-4">
                        {formatCurrency(19)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  mb-8 ">
                    <div>
                      <img
                        src={FPWatchS}
                        alt="FPWatchS"
                        className="h-[120px] w-[130px] object-full"
                      />
                    </div>
                    <div className="p-4">
                      <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                        <Link>White Shirt With Pleat Detail Back</Link>
                      </button>
                      <p className="text-third-text-color text-center mt-4">
                        {formatCurrency(19)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-8 mt-16">
                  Archive
                </h2>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">July 2018</Link>
                    </button>
                    <p>(9)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">June 2018</Link>
                    </button>
                    <p>(39)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">May 2018</Link>
                    </button>
                    <p>(29)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">April 2018</Link>
                    </button>
                    <p>(35)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">March 2018</Link>
                    </button>
                    <p>(22)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">February 2018</Link>
                    </button>
                    <p>(32)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">January 2018</Link>
                    </button>
                    <p>(21)</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-third-text-color hover:text-custom-text-color transition duration-300 ease-in-out">
                      {" "}
                      <Link to="#">December 2017</Link>
                    </button>
                    <p>(26)</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-8 mt-16">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  <button className="border rounded-3xl p-2 flex-1 min-w-[calc(33.333%-0.5rem)] text-third-text-color   hover:border-second-border-color hover:text-custom-text-color transition duration-300 ease-in-out">
                    Fashion
                  </button>
                  <button className="border rounded-3xl  p-2 flex-1 min-w-[calc(33.333%-0.5rem)] text-third-text-color  hover:border-second-border-color hover:text-custom-text-color transition duration-300 ease-in-out">
                    Lifestyle
                  </button>
                  <button className="border rounded-3xl  p-2 flex-1 min-w-[calc(33.333%-0.5rem)] text-third-text-color  hover:border-second-border-color hover:text-custom-text-color transition duration-300 ease-in-out">
                    Denim
                  </button>
                  <button className="border rounded-3xl  p-2 flex-1 min-w-[calc(50%-0.5rem)] text-third-text-color  hover:border-second-border-color hover:text-custom-text-color transition duration-300 ease-in-out">
                    Streetstyle
                  </button>
                  <button className="border rounded-3xl  p-2 flex-1 min-w-[calc(50%-0.5rem)] text-third-text-color  hover:border-second-border-color hover:text-custom-text-color transition duration-300 ease-in-out">
                    Crafts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
