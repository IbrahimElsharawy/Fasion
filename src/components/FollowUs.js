import React from "react";
import { FaRegHeart } from "react-icons/fa";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";


const FollowUs = () => {
  return (
    <div className="my-10 py-10">
      <div className="mb-8">
        <h2 className="text-center text-2xl md:text-4xl">
          @ follow us on instagram
        </h2>
        <div className="w-24 h-[2px] bg-black mx-auto mt-3"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
        <div className="relative group">
          <img src={photo1} alt="photo1" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
          <div className=" w-[80%]  absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <p to="#" className="text-second-text-color mb-2">
              nullam scelerisque, lacus sed consequal laoreet, dui enim iaculis
              leo, eu viverra exnulla in tellus. nullam nec ornare tellus, ac
              fringilla lacusut sit amet enim orci. nameget metus elit.
            </p>
          </div>
          <div className="absolute top-6 left-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className=" flex items-center text-second-text-color">
                <FaRegHeart /> <span className="ml-2">39</span>
              </div>
            </div>
        </div>


        <div className="relative group">
          <img src={photo2} alt="photo2" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
          <div className=" w-[80%]  absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <p to="#" className="text-second-text-color mb-2">
              nullam scelerisque, lacus sed consequal laoreet, dui enim iaculis
              leo, eu viverra exnulla in tellus. nullam nec ornare tellus, ac
              fringilla lacusut sit amet enim orci. nameget metus elit.
            </p>
          </div>
          <div className="absolute top-6 left-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className=" flex items-center text-second-text-color">
                <FaRegHeart /> <span className="ml-2">39</span>
              </div>
            </div>
        </div>

        <div className="relative group">
          <img src={photo3} alt="photo3" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
          <div className=" w-[80%]  absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <p to="#" className="text-second-text-color mb-2">
              nullam scelerisque, lacus sed consequal laoreet, dui enim iaculis
              leo, eu viverra exnulla in tellus. nullam nec ornare tellus, ac
              fringilla lacusut sit amet enim orci. nameget metus elit.
            </p>
          </div>
          <div className="absolute top-6 left-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className=" flex items-center text-second-text-color">
                <FaRegHeart /> <span className="ml-2">39</span>
              </div>
            </div>
        </div>

        <div className="relative group">
          <img src={photo4} alt="photo4" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
          <div className=" w-[80%]  absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <p to="#" className="text-second-text-color mb-2">
              nullam scelerisque, lacus sed consequal laoreet, dui enim iaculis
              leo, eu viverra exnulla in tellus. nullam nec ornare tellus, ac
              fringilla lacusut sit amet enim orci. nameget metus elit.
            </p>
          </div>
          <div className="absolute top-6 left-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className=" flex items-center text-second-text-color">
                <FaRegHeart /> <span className="ml-2">39</span>
              </div>
            </div>
        </div>

        <div className="relative group">
          <img src={photo5} alt="photo5" className="w-full h-auto" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
          <div className=" w-[80%]  absolute top-2/3 left-2/3 transform -translate-x-2/3 -translate-y-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
            <p to="#" className="text-second-text-color mb-2">
              nullam scelerisque, lacus sed consequal laoreet, dui enim iaculis
              leo, eu viverra exnulla in tellus. nullam nec ornare tellus, ac
              fringilla lacusut sit amet enim orci. nameget metus elit.
            </p>
          </div>
          <div className="absolute top-6 left-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className=" flex items-center text-second-text-color">
                <FaRegHeart /> <span className="ml-2">39</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
