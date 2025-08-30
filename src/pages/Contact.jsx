import React from "react";
import contact_banner from "../assets/contact_banner.jpg";
import contact1_img from "../assets/1.png"
import contact2_img from "../assets/2.png"
import contact3_img from "../assets/3.png"
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

function Contact() {
  return (
    <div>
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img loading='lazy' src={contact_banner} alt="" className="w-full h-full" />
        <div className="absolute inset-0 bg-black/40 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            #let's_talk
          </h1>
          <p className="text-white text-md">
            LEAVE A MESSAGE. We love to hear from you!
          </p>
        </div>
      </div>
      <div className="py-10 px-4 sm:px-12 lg:px-24 xl:px-40">
      <div className="grid grid-col-1 md:grid-cols-2 max-sm:gap-2 gap-8">
        <div className="w-full flex flex-col justify-center items-start gap-3">
          <p className="uppercase text-gray-400 text-sm font-medium">
            Get in touch
          </p>
          <h1 className="text-2xl font-bold leading-7">
            Visite one of our agency locations or contact us today
          </h1>
          <p className="text-md font-bold">Head Office</p>
          <div className="flex gap-2 items-center justify-center">
            <GrMapLocation className=" " />
            <p className="text-gray-500 ">Karachi</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <MdOutlineEmail className=" " />{" "}
            <p className="text-gray-500 ">rafeyshaikh57@gmail</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <FaPhoneAlt className="text-sm" />
            <p className="text-gray-500 ">+923120281155</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <FaRegClock className=" " />
            <p className="text-gray-500 ">Monday to Saturday: 9:00am to 16pm</p>
          </div>
        </div>
        <div className="w-full h-[400px] mt-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28939.908800675374!2d66.97003411394766!3d24.949485815803495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ae71fc40a31%3A0xcfbb1d61e6ab566d!2sOrangi%20Town%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1756388379450!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-[1.5fr_0.5fr]  gap-8 pt-12  ">
        <div className="">
          <p className="uppercase text-gray-400 text-sm font-medium mb-4">
            Leave a message
          </p>
          <h1 className="text-2xl font-bold mb-6">
            We love to hear from you.
          </h1>
        <form
          className={"grid sm:grid-cols-2 gap-3 sm:gap-5 w-full"}
        >
          <div className="">
            <p className="mb-2 text-sm font-medium">Your Name</p>
            <div
              className={`flex pl-3 justify-center items-center rounded-lg border border-gray-300`}
            >
              <GoPerson/>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="p-2 w-full text-sm outline-none"
                required
              />
            </div>
          </div>
          <div className="">
            <p className="mb-2 text-sm font-medium">Email Id</p>
            <div
              className={`flex pl-3 justify-center items-center rounded-lg border border-gray-300`}
            >
              <MdOutlineEmail/>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-sm outline-none"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              name="message"
              rows={8}
              placeholder="Enter your message"
              required
              className={`w-full p-3 text-sm outline-none rounded-lg border border-gray-300`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-max flex gap-2 bg-primary bg-gray-900 hover:bg-gray-900/95 text-white text-sm px-10 py-3 rounded-full cursor-pointer"
          >
            Submit
          </button>
        </form>
        </div>
        <div className="space-y-6">
          <div className="flex gap-2 items-center"><img loading='lazy' className="w-16" src={contact1_img} alt="" /><p className="text-md font-semibold">Jhon Doe</p></div>
          <div className="flex gap-2 items-center"><img loading='lazy' className="w-16" src={contact2_img} alt="" /><p className="text-md font-semibold">William Smith</p></div>
          <div className="flex gap-2 items-center"><img loading='lazy' className="w-16" src={contact3_img} alt="" /><p className="text-md font-semibold">Emma Stone</p></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
