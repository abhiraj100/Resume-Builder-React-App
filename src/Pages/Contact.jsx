import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import { FaCircleNodes } from "react-icons/fa6";
import { PiCubeTransparent } from "react-icons/pi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-slate-100 flex flex-col gap-4 items-center py-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-center px-20">
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to
          <span className="text-green-700"> simon.doe@yourwebsite.com</span>
        </p>
        <p>Want to get connected? Follow me on the social channels below.</p>
        <div className="flex gap-3 text-2xl text-green-700">
          <Link to="#">
            <FaXTwitter />
          </Link>
          <Link to="#">
            <FaLinkedinIn />
          </Link>
          <Link to="#">
            <FaGithubAlt />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
          <Link to="#">
            <FaStackOverflow />
          </Link>
          <Link to="#">
            <FaCircleNodes />
          </Link>
          <Link to="#">
            <PiCubeTransparent />
          </Link>
        </div>
      </div>
      <div className="w-full px-40 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Get In Touch</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mt-4">
            <select className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400">
              <option selected disabled>
                Select a service package you're interested in...
              </option>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
              <option>Not Sure</option>
            </select>
          </div>
          <p className="mt-2 text-sm text-gray-600 flex items-center">
            <span className="text-green-700 mr-1">&#9432;</span>
            Want to know what's included in each package? Check the{" "}
            <a href="#" className="text-green-700 font-medium">
              Services & Pricing
            </a>{" "}
            page.
          </p>
          <div className="mt-4">
            <textarea
              placeholder="Enter your message"
              rows="5"
              className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-fit bg-green-700 text-white px-4 font-semibold py-2 rounded hover:bg-green-600"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
