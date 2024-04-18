import React from "react";
import Maps from "./Maps";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-10 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 ">
        <div className=" h-[50vh]">
          <Maps />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
