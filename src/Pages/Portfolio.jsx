import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const details = [
  {
    title: "Project Heading",
    category: "Web App",
    description:
      "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/3369481/pexels-photo-3369481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Dropbox",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Frontend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Backend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Uber",
    image:
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Web App",
    description:
      "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/3369481/pexels-photo-3369481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Web App",
    description:
      "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/3369481/pexels-photo-3369481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Dropbox",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Frontend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Backend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Uber",
    image:
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Backend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Uber",
    image:
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Web App",
    description:
      "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/3369481/pexels-photo-3369481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Dropbox",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Frontend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Google",
    image:
      "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Project Heading",
    category: "Backend",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    client: "Uber",
    image:
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const tabs = [
  { id: 0, title: "All" },
  { id: 1, title: "Web App" },
  { id: 2, title: "Mobile App" },
  { id: 3, title: "Frontend" },
  { id: 4, title: "Backend" },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    activeIndex === 0
      ? details
      : details.filter(
          (project) => project.category === tabs[activeIndex].title
        );

  return (
    <div>
      <div className="bg-slate-100 flex flex-col gap-4 items-center py-6">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-center text-lg px-8">
          Welcome to my online portfolio. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm
          taking on freelance work at the moment. Want some help building your
          software?
        </p>

        <div className="bg-green-800 hover:bg-green-950 px-6 py-2 gap-1 flex items-center justify-center mx-auto rounded-md text-lg w-fit text-white">
          <FaTelegramPlane className="mt-0" /> <span>Hire Me</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 font-semibold text-gray-400 items-center justify-center mt-8">
        {tabs.map((item, index) => (
          <div
            key={item.id}
            className={`cursor-pointer ${
              index === activeIndex
                ? "border-t-2 border-green-700 text-black"
                : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {filteredProjects.map((project, index) => (
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
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>
              <p className="text-gray-500 text-xs mt-4">
                Client: {project.client}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
