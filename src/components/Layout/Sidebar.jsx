import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { RxSwitch } from "react-icons/rx";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const showMorePages = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="bg-green-300  flex flex-col py-4 px-2 ">
      <div className="flex text-white flex-col gap-4 justify-center items-center">
        <h2 className=" text-2xl font-bold">Abhiraj Yadav</h2>
        <img src={assets.profile} alt="" className="w-40 h-40 rounded-full" />

        <p className="px-3 text-sm">
          Hi, my name is Abhiraj Yadav and I'm a software trainee in techugo.
          Welcome to my personal website!
        </p>
        <div className="text-green-300 text-1xl flex gap-2">
          <Link className="bg-white rounded-full hover:text-green-400 p-2">
            <FaXTwitter />
          </Link>
          <Link className="bg-white rounded-full hover:text-green-400 p-2">
            <FaLinkedinIn />
          </Link>
          <Link className="bg-white rounded-full hover:text-green-400 p-2">
            <FaGithubAlt />
          </Link>
          <Link className="bg-white rounded-full hover:text-green-400 p-2">
            <FaStackOverflow />
          </Link>
          <Link className="bg-white rounded-full hover:text-green-400 p-2">
            <FaDiscord />
          </Link>
        </div>
      </div>

      <div className="flex flex-col mx-auto mt-8">
        <div className="flex flex-col gap-4 justify-center items-left ml-8 text-slate-100 font-semibold ">
          <Link to="/" className="flex gap-2  hover:text-green-800">
            <FaUser className="mt-1" /> <span className="">About Me</span>
          </Link>
          <Link to="/portfolio" className="flex gap-2  hover:text-green-800">
            <CgProfile className="mt-1 font-bold" />{" "}
            <span className="">Portfolio</span>
          </Link>
          <Link
            to="/service-pricing"
            className="flex gap-2  hover:text-green-800"
          >
            <MdOutlinePriceCheck className="mt-1" />{" "}
            <span className="">Services & Pricing</span>
          </Link>
          <Link to="/resume" className="flex gap-2  hover:text-green-800">
            <IoDocumentText className="mt-1" /> <span className="">Resume</span>
          </Link>
          <Link to="/blog" className="flex gap-2  hover:text-green-800">
            <FaBlog className="mt-1" /> <span className="">Blog</span>
          </Link>
          <Link to="/contact" className="flex gap-2  hover:text-green-800">
            <MdContacts className="mt-1" /> <span className="">Contact</span>
          </Link>
          <Link
            to="/contact"
            onClick={showMorePages}
            className="flex gap-2  hover:text-green-800"
          >
            <MdMiscellaneousServices className="mt-1" />{" "}
            <span className="">More Pages </span>{" "}
            <BiSolidDownArrow className="mt-1 w-3" />
          </Link>
          {showMore && (
            <div className="flex flex-col bg-green-500">
              <Link
                to="/project-page"
                className="py-1 flex justify-center hover:bg-green-300 w-full"
              >
                Project Page
              </Link>
              <Link
                to="/blog"
                className="py-1 flex justify-center hover:bg-green-300 w-full"
              >
                Blog Home 1
              </Link>
              <Link
                to="/blog"
                className="py-1 flex justify-center hover:bg-green-300 w-full"
              >
                Blog Home 2
              </Link>
              <Link
                to="/blog-post"
                className="py-1 flex justify-center hover:bg-green-300 w-full"
              >
                Blog Post
              </Link>
            </div>
          )}

          <Link
            to="/contact"
            className="bg-green-800 hover:bg-green-950 px-4 py-2 gap-2 flex mx-auto rounded-md"
          >
            <FaTelegramPlane className="mt-1" /> <span>Hire Me</span>
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <div className="flex gap-1 font-bold text-slate-100">
            <CgDarkMode className="mt-1" /> <span>Dark Mode</span>
          </div>
          <div>
            <RxSwitch className="text-slate-200 text-4xl font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
