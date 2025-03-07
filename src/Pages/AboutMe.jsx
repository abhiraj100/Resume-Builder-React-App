import React, { useState } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaGrunt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaLess } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../components/Layout/Footer";

const courses = [
  {
    icon: <FaJsSquare />,
    title: "Vanilla JavaScript",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: [<FaAngular />, <FaReact />, <FaVuejs />],
    title: "Angular, React & Vue",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: <FaPython />,
    title: "Python & Django",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: <FaPhp />,
    title: "PHP",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: [<FaNpm />, <FaGulp />, <FaGrunt />],
    title: "npm, Gulp & Grunt",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: [<FaHtml5 />, <FaCss3Alt />],
    title: "HTML & CSS",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
  {
    icon: [<FaSass />, <FaLess />],
    title: "Sass & LESS",
    content:
      "List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
  },
];

const testimonials = [
  {
    desc: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "James Lee",
    designation: "Product Manager, Amazon",
  },
  {
    desc: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Samuel Rayes",
    designation: "Product Manager, Uber",
  },
  {
    desc: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
    image:
      "https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Rayan Dahel",
    designation: "Founder, Paytm",
  },
  {
    desc: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
    image:
      "https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Kate White",
    designation: "Sr. Software Developer, Phonepe",
  },
  {
    desc: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
    image:
      "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Dher",
    designation: "Founder, Microsoft",
  },
  {
    desc: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis",
    image:
      "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jack Dyan",
    designation: "Product Manager, Atlasian",
  },
];

const projects = [
  {
    title: "Project Heading",
    description:
      "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/3369481/pexels-photo-3369481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Dropbox",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Uber",
    image:
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const blogs = [
  {
    title: "Top 3 JavaScript Frameworks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-1.jpg",
    link: "#",
    published: "2 days ago",
  },
  {
    title: "About Remote Working",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-2.jpg",
    link: "#",
    published: "1 week ago",
  },
  {
    title: "A Guide to Becoming a Full-Stack Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-3.jpg",
    link: "#",
    published: "3 weeks ago",
  },
];

const AboutMe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="mx-auto my-4 flex flex-col gap-14">
      {/* top */}
      <div className="flex px-4 gap-4 bg-slate-100 p-8 ">
        <div className="flex w-4/5 flex-col space-y-3">
          <h1 className="text-4xl font-bold">Abhiraj Yadav</h1>
          <p className="text-3xl font-light">Software Trainee</p>
          <p className="text-xl">
            I'm a software engineer specialised in frontend and backend
            development for complex scalable web apps. I write about software
            development on <span className="text-green-700">my blog</span>. Want
            to know how I may help your project? Check out my project{" "}
            <span className="text-green-700">portfolio</span> and{" "}
            <span className="text-green-700">online resume</span>.
          </p>
          <div className="flex gap-4">
            <div className="flex gap-1 hover:bg-green-950 bg-green-800 px-3 py-1 rounded-md font-medium text-white">
              <BiSolidRightArrowCircle className="mt-1" />
              <span>View Portfolio</span>{" "}
            </div>
            <div className="flex gap-1 hover:bg-gray-900 bg-gray-700 px-3 py-1 rounded-md font-medium text-white">
              <IoDocumentText className="mt-1" />
              <span>View Resume</span>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[600px] h-[300px]"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className=" border-l-4 border-green-900 font-bold px-2 text-4xl">
            What I do
          </h1>
          <p>
            I have more than 10 years' experience building software for clients
            all over the world. Below is a quick overview of my main technical
            skill sets and technologies I use. Want to find out more about my
            experience? Check out my{" "}
            <span className="text-green-700">online resume</span> and{" "}
            <span className="text-green-700">project portfolio</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
          {courses.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-left p-6 border rounded-lg shadow-md bg-white"
            >
              {/* Icons */}
              <div className="flex items-center justify-center space-x-3 mb-4 text-3xl">
                {Array.isArray(item.icon) ? (
                  item.icon.map((i, idx) => (
                    <span key={idx} className="text-gray-700">
                      {i}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-700">{item.icon}</span>
                )}
              </div>

              <h3 className="text-[17px] font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-1 mt-4 items-center justify-center mx-auto  hover:bg-green-500 bg-green-400 px-4 py-2 rounded-md font-medium text-white">
          <BiSolidRightArrowCircle className="mt-1" />
          <span>Services & Pricing</span>{" "}
        </div>
      </div>

      {/* Testimonals */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className=" border-l-4 border-green-900 font-bold px-2 text-4xl">
            Testimonals
          </h1>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
                  <div className="relative flex justify-start">
                    <div className="absolute -top-4 -left-4 bg-green-500 text-white px-3 py-2 rounded-tr-lg text-xl font-bold">
                      “
                    </div>
                  </div>
                  <p className="text-gray-700 italic mt-6 text-sm">
                    {item.desc}
                  </p>
                  <div className="mt-6 flex  items-center gap-2">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full "
                      />
                    </div>
                    <div>
                      <h3 className="text-md text-left font-semibold mt-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Featured Projects */}

      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className=" border-l-4 border-green-900 font-bold px-2 text-4xl">
            Featured Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group flex bg-white shadow-lg overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-1/2 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black/80 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
                      ⓘ View Case Study
                    </button>
                  </div>
                )}
              </div>
              <div className="w-1/2 p-6">
                <h3 className="text-lg font-bold underline">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2 ">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs mt-4">
                  Client: {project.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-1 mt-4 items-center justify-center mx-auto  hover:bg-green-500 bg-green-400 px-4 py-2 rounded-md font-medium text-white">
          <BiSolidRightArrowCircle className="mt-1" />
          <span>View Portfolio</span>{" "}
        </div>
      </div>

      {/* Latest Blog Posts */}

      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className=" border-l-4 border-green-900 font-bold px-2 text-4xl">
            Featured Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 p-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg  overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                <div className="mt-6 flex flex-col gap-8">
                  <a href={blog.link} className="text-green-600  inline-block">
                    Read more →
                  </a>
                  <p className="text-gray-500 text-xs ">
                    Published {blog.published}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-4 items-center justify-center mx-auto  hover:bg-green-500 bg-green-400 px-4 py-2 rounded-md font-medium text-white">
          <BiSolidRightArrowCircle className="mt-1" />
          <span>View Blog</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
