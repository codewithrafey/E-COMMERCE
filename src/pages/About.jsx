import React from "react";
import about_banner from "../assets/contact_banner.jpg";
import about_banner1 from "../assets/about_banner.jpg";

function About() {
  return (
    <div>
      <div className="">
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <img loading="lazy" src={about_banner} alt="" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              #knowUs
            </h1>
            <p className="text-white text-md">
              Discover our journey, vision, and values.
            </p>
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 max-sm:gap-2 gap-8 py-10 px-4 sm:px-12 lg:px-24 xl:px-40">
          <div className="rounded overflow-hidden">
            <img src={about_banner1} className="" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold">Who We Are?</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We are a passionate team dedicated to creating high-quality
              products that bring value and style to your everyday life. Our
              journey started with a simple vision – to combine innovation,
              creativity, and functionality in everything we design. Over the
              years, we have grown into a trusted name, loved by customers for
              our commitment to excellence and attention to detail. With every
              product, we aim to inspire confidence, comfort, and elegance,
              ensuring that our customers always experience the very best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
