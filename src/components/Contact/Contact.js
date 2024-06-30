import React from "react";
import Maps from "./Maps";
import MyForm from "./MyForm";
import bgAbout from "../../assets/Contact.jpg";

const Contact = () => {

  const bgStyle = {
    backgroundImage: `url(${bgAbout})`,
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
            <h2 className="text-2xl md:text-4xl font-bold uppercase">About</h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto my-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2">
          <div className="relative h-[500px] w-full">
            <Maps />
          </div>
          <div>
            <MyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
