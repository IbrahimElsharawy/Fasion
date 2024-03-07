import React from "react";
import bgAbout from "../../assets/bgAbout.jpg";
import AboutPh from "../../assets/About.jpg";

const About = () => {
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
            <h2 className="text-2xl md:text-4xl font-bold uppercase ">About</h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto my-10 py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2">
          <div className="col-span-1 ">
            <img
              src={AboutPh}
              alt="AboutPh"
              className="object-cover w-full h-[400px]"
            />
          </div>
          <div className="col-span-2  ">
            <h4 className="my-4 text-2xl">Our story</h4>
            <p className="mb-8 text-second-text-color">
              Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
              Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
              dolor quis lorem accumsan, vitae molestie urna dapibus.
              Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis
              magna ut interdum laoreet. Donec gravida lorem elit, quis
              condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam
              aliquam imperdiet sodales. Ut fringilla turpis in vehicula
              vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat
              volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus
              sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo
              eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis
              ut commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae
              ultrices orci.
            </p>
            <div class="relative">
              <div class="pl-4 border-l-2 border-second-text-color ">
                <p class="text-second-text-color mb-8">
                  Creativity is just connecting things. When you ask creative
                  people how they did something, they feel a little guilty
                  because they didn't really do it, they just saw something. It
                  seemed obvious to them after a while.
                </p>
                <span class="text-second-text-color">- Steve Job’s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
