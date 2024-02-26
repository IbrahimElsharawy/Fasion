import React, { useState, useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import formatCurrency from "../FormatCurrency/FormatCurrency";

const Products = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/products");
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="flex justify-center items-center mt-20 ">
        <CirclesWithBar
          height="100"
          width="100"
          color="#E65540"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 ">
          {data.map((product) => {
            return (
              <div
                className=" text-center  border rounded p-2 "
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px]  "
                />
                <div className="flex justify-around items-center my-2">
                  <h5 className=" font-bold text-2xl">{product.category}</h5>
                  <p className="my-4">{formatCurrency(product.price)}</p>
                </div>
                <NavLink
                  to={`/products/${product.id}`}
                  className="flex flex-col justify-center items-center mx-auto  rounded py-2 font-medium border-2 border-black text-black capitalize hover:bg-black hover:text-white transition ease-in-out  duration-500"
                >
                  buy now
                </NavLink>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="max-w-[1240px] mx-auto my-10 py-10  ">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl text-center uppercase  ">
          lasted products
        </h1>
        <div className="w-24 h-[2px] bg-black mx-auto mt-3  "></div>
      </div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
