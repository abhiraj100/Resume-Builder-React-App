import React from "react";
import { useSelector } from "react-redux";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const ViewResume = () => {
  const form = useSelector((state) => state.form);

  return (
    <div className="p-6 shadow-2xl w-1/2">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold tracking-[2px] text-3xl text-green-700">
            {form.firstName} {form.lastName}
          </h2>
          <p className="text-md">{form.profession}</p>
        </div>
        <div className="border-l border-gray-400 flex flex-col pl-2">
          <div className="flex flex-col text-gray-700">
            <div className="flex items-center gap-1">
              <div>
                <FaPhoneSquareAlt className="flex items-center" />
              </div>{" "}
              <div className="text-sm underline">{form.phone}</div>
            </div>
          </div>
          <div className="flex flex-col text-gray-700">
            <div className="flex items-center gap-1">
              <div>
                <IoIosMail className="flex items-center" />
              </div>{" "}
              <div className="text-sm underline">{form.email}</div>
            </div>
          </div>
          <div className="flex flex-col text-gray-700">
            <div className="flex items-center gap-1">
              <div>
                <FaEarthAfrica className="flex items-center" />
              </div>{" "}
              <div className="text-sm underline">{form.website}</div>
            </div>
          </div>
          <div className="flex flex-col text-gray-700">
            <div className="flex items-center gap-1">
              <div>
                <MdOutlineLocationOn className="flex items-center" />
              </div>{" "}
              <div className="text-sm underline">{form.country}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4 gap-4">
        <img
          src={form.profileImage}
          alt=""
          className="rounded-full w-24 h-24 mt-4"
        />
        <p className="flex items-center">{form.summary}</p>
      </div>

      <hr className="text-gray-200 mt-4" />

      <div className="flex justify-between">
        <div className=" flex flex-col">
          <div className="flex flex-col mt-4 gap-2">
            <div className="border-l-4 border-green-800 uppercase text-green-800 font-bold tracking-[1px] pl-2">
              Work Experiences
            </div>

            {form.experience.map((exp, index) => (
              <div key={index} className="flex flex-col ">
                <div className="flex justify-between">
                  <p className="font-semibold text-md">{exp.title}</p>
                  <p className="text-sm text-gray-500">
                    {exp.name} | {exp.duration}
                  </p>
                </div>
                <div className="text-sm text-gray-500">{exp.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <div className="border-l-4 border-green-800 uppercase text-green-800 font-bold tracking-[1px] pl-2">
              Projects
            </div>

            {form.projects.map((project, index) => (
              <div key={index} className="flex flex-col justify-end">
                <div className="flex justify-between">
                  <p className="font-semibold text-md">{project.title}</p>
                  <p className="text-sm text-gray-500">
                    {project.name} | {project.duration}
                  </p>
                </div>
                <div className="text-sm text-gray-500">{project.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-4 pl-2 ml-4 border-l-1 gap-4 border-gray-500">
          <div>
            <div className="border-l-4 border-green-800 uppercase text-green-800 font-bold tracking-[1px] pl-2">
              SKILLS
            </div>
            {form.skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-sm ">{skill.skill}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="border-l-4 border-green-800 uppercase text-green-800 font-bold tracking-[1px] pl-2">
              AWARDS
            </div>
            {form.awards.map((award, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-sm ">{award.award}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="border-l-4 border-green-800 uppercase text-green-800 font-bold tracking-[1px] pl-2">
              LANGUAGES
            </div>
            {form.languages.map((language, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-sm ">{language.language}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="border-l-4 border-green-800 uppercase text-green-800 font-bold tracking-[1px] pl-2">
              INTERESTS
            </div>
            {form.interests.map((interest, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-sm ">{interest.interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        <div className="flex items-center justify-center gap-1">
          <div>
            <FaSquareGithub />
          </div>
          <div>{form.github}</div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div>
            <FaLinkedin />
          </div>
          <div>{form.linkedin}</div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div>
            <FaTwitterSquare />
          </div>
          <div>{form.twitter}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewResume;
