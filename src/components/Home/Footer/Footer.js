import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="bg-second-color   ">
      <div className="max-w-[1240px] mx-auto mt-10 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8 mx-2 ">
          <div>
            <h2 className="font-bold	">GET IN TOUCH</h2>
            <p className="my-8 ">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex">
              <NavLink
                to="#"
                className="mr-2 hover:text-custom-text-color transition duration-300 ease-in-out"
              >
                <FaFacebookF />
              </NavLink>

              <NavLink
                to="#"
                className="mr-2 hover:text-custom-text-color transition duration-300 ease-in-out"
              >
                <FaInstagram />
              </NavLink>

              <NavLink
                to="#"
                className="mr-2 hover:text-custom-text-color transition duration-300 ease-in-out"
              >
                <FaTwitter />
              </NavLink>

              <NavLink
                to="#"
                className="mr-2 hover:text-custom-text-color transition duration-300 ease-in-out"
              >
                <FaSnapchatGhost />
              </NavLink>

              <NavLink
                to="#"
                className="mr-2 hover:text-custom-text-color transition duration-300 ease-in-out"
              >
                <FaYoutube />
              </NavLink>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-8	">CATEGORIES</h2>
            <div className="flex flex-col w-full">
              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                men
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                woman
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                dresses
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                sunglasses
              </NavLink>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-8	">LINKS</h2>
            <div className="flex flex-col ">
              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                search
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                about us
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                contact us
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                returns
              </NavLink>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-8	">HELP</h2>
            <div className="flex flex-col ">
              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                track order
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                returns
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                shipping
              </NavLink>

              <NavLink
                to="#"
                className="mb-4 hover:text-custom-text-color capitalize transition duration-300 ease-in-out"
              >
                fAQs
              </NavLink>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-8">SUBSCRIBE</h2>
            <form className="flex flex-col" onSubmit={handleSubscribe}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-6 border-b border-gray-300 bg-second-color focus:border-second-border-color focus:outline-none p-2"
                placeholder="email@example.com"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black uppercase text-white hover:bg-custom-color transition duration-300 ease-in-out rounded-full"
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
