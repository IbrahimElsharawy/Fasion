import React from "react";
import Maps from "./Maps";
import MyForm from "./MyForm";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-10 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 ">
        <div  className="relative h-[500px] w-full">
          <Maps />
        </div>
        <div>
          <MyForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
