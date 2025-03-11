import React from "react";
import { FaIndustry, FaUsers, FaGlobe } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const ProjectPage = () => {
  return (
    <div className="mx-auto my-4 flex flex-col gap-14">
      <div className="bg-slate-100 flex flex-col gap-3 items-center py-10">
        <h1 className="text-3xl font-bold">Case Study: Project Name</h1>
        <p className="text-lg text-center px-20">
          Project intro goes here. In the intro it's a good idea to answer a
          potential client's need/problem so it's more likely to land your next
          project or job.
        </p>
      </div>

      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 bg-slate-100 p-2 md:grid-cols-3 gap-6 items-start">
          {/* Image Section */}
          <div className="md:col-span-1">
            <img
              src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-3.jpg"
              alt="Client Project"
              className="rounded-lg w-[300px] h-[330px]"
            />
          </div>

          {/* Client Information */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Client Name</h2>
            <p className="flex items-center gap-2 mt-2">
              <FaIndustry className="text-gray-600" />{" "}
              <strong>Industry:</strong> Tech
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaUsers className="text-gray-600" /> <strong>Size:</strong> 100+
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaGlobe className="text-gray-600" />
              <strong>Website:</strong>
              <a href="#" className="text-blue-600 hover:underline">
                clientsite.com
              </a>
            </p>

            <p className="mt-4 text-gray-700">
              Short description of the client and project requirements. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>

            <h3 className="mt-4 text-lg font-semibold">Project Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                Requirement lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </li>
              <li>Requirement donec pede justo, fringilla vel, aliquet nec.</li>
              <li>Requirement phasellus ullamcorper ipsum rutrum nunc.</li>
            </ul>
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
        </div>

        {/* The Challenge Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
        </div>

        {/* The Approach & Solution */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">The Approach & Solution</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          <div className="grid grid-cols-2 gap-3 my-4">
            <img
              src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-figure-1.jpg"
              alt="Client Project"
              className="rounded-lg w-full"
            />
            <img
              src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/project/project-figure-2.jpg"
              alt="Client Project"
              className="rounded-lg w-full"
            />
          </div>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
        </div>
      </div>

      {/* The Results */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* The Results Section */}
        <h2 className="text-2xl font-bold mb-4">The Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Efficiency", value: "20%", trend: "up" },
            { title: "Customer Satisfaction", value: "14%", trend: "up" },
            { title: "Sales Generated", value: "$130K", trend: "" },
            { title: "Overall Cost", value: "20%", trend: "down" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-400  bg-gray-100 flex flex-col gap-1 rounded-lg shadow-sm "
            >
              <h3 className="text-green-600 font-medium">{item.title}</h3>
              <p className="text-2xl text-[#000000] opacity-80 font-bold">
                {item.value}{" "}
                <span
                  className={`text-sm ${
                    item.trend === "down" ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {item.trend}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                Metric description lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus....
        </p>

        {/* Client Testimonial Section */}
        <h2 className="text-2xl  font-bold mt-8">Client Testimonial</h2>
        <div className="mt-4 relative p-6 border rounded-lg shadow-sm bg-white flex items-start gap-4">
          <span className="bg-green-700 rounded-tl-lg  absolute top-0 left-0 px-2 overflow-hidden text-white text-2xl">
            “
          </span>
          <div>
            <p className="text-gray-700 italic">
              Simon is a brilliant software engineer! Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">James Lee</p>
                <p className="text-sm text-gray-600">Product Manager, Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hire Me */}
      <div className="bg-slate-100 flex flex-col gap-4 items-center py-6">
        <h1 className="text-2xl font-bold">
          Want me to help with your project?
        </h1>
        <p className="text-center text-md px-16">
          If you take on freelance work, you can use this section to prompt any
          potential clients to get in touch with you with their project
          requirements.
        </p>

        <div className="bg-green-800 hover:bg-green-950 px-6 py-2 gap-1 flex items-center justify-center mx-auto rounded-md text-lg w-fit text-white">
          <FaTelegramPlane className="mt-0" /> <span>Hire Me</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
