import React from "react";
import { banners } from "../../assets/all_product";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div className="w-full relative flex md:flex-row flex-col justify-center items-center gap-8 py-10 bg-white">
      {banners.map((banner) => (
        <div key={banner.id} className="relative w-full sm:w-[510px] h-[220px] overflow-hidden rounded-xl shadow-lg group cursor-pointer">
          <img
          loading="lazy"
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-end text-white px-6 pb-5">
            <h1 className="text-[22px] font-bold mb-1.5">{banner.title}</h1>
            <p className="mb-3 text-[15px]">{banner.subtitle}</p>
            <Link to={`/${banner.category.toLowerCase()}`} className="bg-white text-black px-4 font-semibold py-1.5 rounded text-[12px] w-fit text-center  hover:bg-white/90 transition cursor-pointer">
              {banner.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroBanner;
