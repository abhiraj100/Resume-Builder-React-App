import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../components/Layout/Footer";

const packages = [
  {
    name: "Basic",
    price: "$900",
    details:
      "A small app lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    features: [
      true,
      true,
      true,
      false,
      false,
      false,
      1,
      "7 days",
      <button className="bg-green-500 px-3 py-1 rounded-md text-white font-semibold">
        Book Now
      </button>,
    ],
  },
  {
    name: "Standard",
    price: "$2500",
    details:
      "An medium app lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    features: [
      true,
      true,
      true,
      true,
      false,
      false,
      2,
      "14 days",
      <button className="bg-green-500 px-3 py-1 rounded-md text-white font-semibold">
        Book Now
      </button>,
    ],
  },
  {
    name: "Premium",
    price: "$5000+",
    details:
      "A complex app lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      "5+",
      "2-3 month(s)",
      <button className="bg-green-500 px-3 py-1 rounded-md text-white font-semibold">
        Get A Quote
      </button>,
    ],
  },
];

const featureNames = [
  "Feature Lorem",
  "Feature Ipsum",
  "Feature Commodo",
  "Feature Consectetuer",
  "Feature Aenean",
  "Feature Duis",
  "Revisions",
  "Delivery Time",
  "",
];

const accordion = [
  {
    id: 0,
    quote:
      '"Do what you can, with what you have, where you are." – Theodore Roosevelt',
    desc: "You don't need perfect conditions to start; use what you have and take action now.",
  },
  {
    id: 1,
    quote: '"Happiness depends upon ourselves." – Aristotle',
    desc: "True happiness comes from within, not external circumstances or people.",
  },
  {
    id: 2,
    quote:
      '"Act as if what you do makes a difference. It does." – William James',
    desc: "Even small actions can have a meaningful impact on the world and others.",
  },
  {
    id: 3,
    quote: '"Believe you can and you"re halfway there." – Theodore Roosevelt',
    desc: "Confidence and belief in yourself are crucial to achieving success.",
  },
  {
    id: 4,
    quote:
      '"It does not matter how slowly you go as long as you do not stop." – Confucius',
    desc: "Progress is progress, no matter how small—consistency is key.",
  },
  {
    id: 5,
    quote:
      '"Difficulties in life are intended to make us better, not bitter." – Dan Reeves',
    desc: "Challenges help us grow; they should be seen as opportunities for learning.",
  },
  {
    id: 6,
    quote: '"You miss 100% of the shots you don’t take." – Wayne Gretzky',
    desc: "If you don’t try, you’ll never know what could have been achieved.",
  },
  {
    id: 7,
    quote:
      '"Success is not final, failure is not fatal: it is the courage to continue that counts." – Winston',
    desc: "Both success and failure are temporary; persistence matters most.",
  },
  {
    id: 8,
    quote: '"Be yourself; everyone else is already taken." – Oscar Wilde',
    desc: "Authenticity is key—trying to be someone else is a waste of who you are.",
  },
  {
    id: 9,
    quote:
      '"A journey of a thousand miles begins with a single step." – Lao Tzu',
    desc: "Big goals are achieved by taking the first step and continuing forward.",
  },
];

const ServiceAndPricing = () => {
  const [isActive, setIsActive] = useState(null);

  const toggleAccordion = (index) => {
    setIsActive(isActive === index ? null : index);
  };
  return (
    <div>
      <div className="bg-slate-100 flex flex-col gap-4 items-center py-6">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-center text-md px-8">
          I have 10+ years of development experience building software for the
          web and mobile devices. You can take a look at my{" "}
          <span className="text-green-700 underline">project portfolio </span>
          and <span className="text-green-700 underline">online resume</span> to
          find out more about my skills and experiences.
        </p>
        <p className="text-center text-md px-10">
          I'm currently taking on freelance software development work. You're
          welcome to contact me for a custom quote for your project. I also
          offer development service packages with fixed pricing.
        </p>
      </div>

      <div>
        <div className=" mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Service Packages
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="border border-gray-300">
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2"></th>
                  {packages.map((pkg, index) => (
                    <th
                      key={index}
                      className="border border-gray-300 px-4 py-2 text-green-700"
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">
                    Package Price
                  </td>
                  {packages.map((pkg, index) => (
                    <td
                      key={index}
                      className="border border-gray-300 px-4 py-2 font-bold"
                    >
                      {pkg.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">
                    Details
                  </td>
                  {packages.map((pkg, index) => (
                    <td
                      key={index}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {pkg.details}
                    </td>
                  ))}
                </tr>
                {featureNames.map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">
                      {feature}
                    </td>
                    {packages.map((pkg, pkgIndex) => (
                      <td
                        key={pkgIndex}
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        {pkg.features[featureIndex]
                          ? pkg.features[featureIndex] === true
                            ? "✔️"
                            : pkg.features[featureIndex]
                          : "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className=" mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
        <p className="text-center">
          You can use this section to address any queries your potential clients
          may have.
        </p>

        <div className=" mx-auto mt-10">
          {accordion.map((item, index) => (
            <div key={item.id} className=" p-2 cursor-pointer ">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center bg-gray-100 py-4 px-1 rounded-md"
              >
                <p className="font-semibold">{item.quote}</p>
                {isActive === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isActive === index && (
                <p className=" text-gray-700 bg-gray-300 pb-2 px-1">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAndPricing;
