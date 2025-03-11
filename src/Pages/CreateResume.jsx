import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpField,
  updateExpChange,
  updateField,
  removeExpField,
  addProjectField,
  removeProjectField,
  updateProjectChange,
  addSkill,
  removeSkill,
  updateSkill,
  addAward,
  removeAward,
  updateAward,
  addLanguage,
  removeLanguage,
  updateLanguage,
  addInterest,
  removeInterest,
  updateInterest,
} from "../store/features/formSlice.js";

const CreateResume = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // dispatch(updateField({ name: e.target.name, value: e.target.value }));
    dispatch(updateField({ name, value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateField({ name: "profileImage", value: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddExp = () => {
    dispatch(addExpField());
  };

  const handleRemoveExp = (index) => {
    dispatch(removeExpField(index));
  };

  const handleExpChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateExpChange({ index, name, value }));
  };

  const handleAddProject = () => {
    dispatch(addProjectField());
  };

  const handleRemoveProject = (index) => {
    dispatch(removeProjectField(index));
  };

  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateProjectChange({ index, name, value }));
  };

  const handleAddSkill = () => {
    dispatch(addSkill());
  };

  const handleRemoveSkill = (index) => {
    dispatch(removeSkill(index));
  };

  const handleSkillChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateSkill({ index, name, value }));
  };
  const handleAddAward = () => {
    dispatch(addAward());
  };

  const handleRemoveAward = (index) => {
    dispatch(removeAward(index));
  };

  const handleAwardChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateAward({ index, name, value }));
  };

  const handleAddLanguage = () => {
    dispatch(addLanguage());
  };

  const handleRemoveLanguage = (index) => {
    dispatch(removeLanguage(index));
  };

  const handleLanguageChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateLanguage({ index, name, value }));
  };

  const handleAddInterest = () => {
    dispatch(addInterest());
  };

  const handleRemoveInterest = (index) => {
    dispatch(removeInterest(index));
  };

  const handleInterestChange = (index, event) => {
    const { name, value } = event.target;
    dispatch(updateInterest({ index, name, value }));
  };

  return (
    <div className="p-6 w-1/2 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Your Resume</h2>

      <div className="space-y-2">
        {/* Image Upload */}
        <div className="flex flex-col  rounded-full">
          {!form.profileImage ? (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded-full w-20 h-20"
            />
          ) : (
            <img
              src={form.profileImage}
              alt="Profile"
              className="mt-3 w-24 h-24 object-cover rounded-full"
            />
          )}
          <label htmlFor="image" className="font-semibold mb-1">
            Upload Image +
          </label>
        </div>
        <div className="flex gap-4 justify-between items-center">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="font-semibold">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="border p-2 rounded"
            />
          </div>

          {/* Surname */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
              className="border p-2 rounded"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4 justify-between">
            {/* City */}
            <div className="flex flex-col">
              <label htmlFor="city" className="font-semibold">
                City
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="border p-2 rounded"
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label htmlFor="state" className="font-semibold">
                State
              </label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="border p-2 rounded"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            {/* Country */}
            <div className="flex flex-col">
              <label htmlFor="country" className="font-semibold">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Enter your country"
                className="border p-2 rounded"
              />
            </div>

            {/* Pincode */}
            <div className="flex flex-col">
              <label htmlFor="pincode" className="font-semibold">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Enter your pincode"
                className="border p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="border p-2 rounded"
          />
        </div>

        {/* Website */}
        <div className="flex flex-col">
          <label htmlFor="website" className="font-semibold">
            Website
          </label>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Enter your website"
            className="border p-2 rounded"
          />
        </div>

        {/* Github */}
        <div className="flex flex-col">
          <label htmlFor="github" className="font-semibold">
            Github
          </label>
          <input
            type="text"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="Enter your github"
            className="border p-2 rounded"
          />
        </div>

        {/* Linkedin */}
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="font-semibold">
            Linkedin
          </label>
          <input
            type="text"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="Enter your linkedin"
            className="border p-2 rounded"
          />
        </div>

        {/* Twitter */}
        <div className="flex flex-col">
          <label htmlFor="twitter" className="font-semibold">
            Twitter
          </label>
          <input
            type="text"
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
            placeholder="Enter your twitter"
            className="border p-2 rounded"
          />
        </div>

        {/* profession */}
        <div className="flex flex-col">
          <label htmlFor="profession" className="font-semibold">
            Profession
          </label>
          <input
            type="profession"
            name="profession"
            value={form.profession}
            onChange={handleChange}
            placeholder="Enter your profession"
            className="border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border p-2 rounded"
          />
        </div>

        {/* Technical Skills */}
        <div className="flex flex-col">
          <label htmlFor="technicalSkills" className="font-semibold">
            Technical Skills
          </label>
          <input
            type="text"
            name="technicalSkills"
            value={form.technicalSkills}
            onChange={handleChange}
            placeholder="Enter your technical skills"
            className="border p-2 rounded"
          />
        </div>

        {/* Experience */}
        <div className="flex flex-col">
          <label htmlFor="experienceList" className="font-semibold">
            Work Experience
          </label>
          <hr className="my-1" />
          <div className="flex flex-col gap-5">
            {form.experience.map((exp, index) => (
              <div className="flex flex-col gap-1 " key={index}>
                <div className="flex justify-between">
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => handleExpChange(index, e)}
                    value={exp.name}
                    placeholder="Orgnaisation name"
                    className="p-1 text-lg text-black"
                  />
                  <input
                    name="duration"
                    type="text"
                    onChange={(e) => handleExpChange(index, e)}
                    value={exp.duration}
                    placeholder="Duration"
                    className="w-28 p-1 text-sm text-gray-500"
                  />
                </div>
                {/* <hr className="text-gray-400 -mt-1" /> */}

                <input
                  name="title"
                  type="text"
                  onChange={(e) => handleExpChange(index, e)}
                  value={exp.title}
                  placeholder="Role"
                  className="px-1 text-md text-black"
                />

                <textarea
                  name="desc"
                  id=""
                  rows="10"
                  cols="10"
                  placeholder="Description"
                  value={exp.desc}
                  onChange={(e) => handleExpChange(index, e)}
                  className="w-full h-28 p-1 text-sm overflow-auto hide-scrollbar"
                />
                <button
                  onClick={(index) => handleRemoveExp(index)}
                  className="flex justify-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddExp}>Add</button>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col">
          <label htmlFor="experienceList" className="font-semibold">
            Projects
          </label>
          <hr className="my-1" />
          <div className="flex flex-col gap-5">
            {form.projects.map((project, index) => (
              <div className="flex flex-col gap-1 " key={index}>
                <div className="flex justify-between">
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => handleProjectChange(index, e)}
                    value={project.name}
                    placeholder="Project Title"
                    className="p-1 text-lg text-black"
                  />
                  <input
                    name="duration"
                    type="text"
                    onChange={(e) => handleProjectChange(index, e)}
                    value={project.duration}
                    placeholder="Duration"
                    className="w-28 p-1 text-sm text-gray-500"
                  />
                </div>
                {/* <hr className="text-gray-400 -mt-1" /> */}

                <input
                  name="title"
                  type="text"
                  onChange={(e) => handleProjectChange(index, e)}
                  value={project.title}
                  placeholder="Skills used"
                  className="px-1 text-md text-black"
                />

                <textarea
                  name="desc"
                  id=""
                  rows="10"
                  cols="10"
                  placeholder="Description"
                  value={project.desc}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full h-28 p-1 text-sm overflow-auto hide-scrollbar"
                />
                <button
                  onClick={(index) => handleRemoveProject(index)}
                  className="flex justify-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddProject}>Add</button>
          </div>
        </div>

        {/* Skills */}

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="skills" className="font-semibold">
              Skills
            </label>

            {form.skills.map((exp, index) => (
              <div className="flex flex-col gap-1 " key={index}>
                <div className="flex justify-between">
                  <input
                    name="skill"
                    type="text"
                    onChange={(e) => handleSkillChange(index, e)}
                    value={exp.name}
                    placeholder="Skill"
                    className="p-0 text-lg text-black"
                  />
                </div>
                <button
                  onClick={(index) => handleRemoveSkill(index)}
                  className="flex justify-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddSkill}>Add</button>
          </div>
        </div>

        {/* Awards */}

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="awards" className="font-semibold">
              Awards
            </label>

            {form.awards.map((exp, index) => (
              <div className="flex flex-col gap-1 " key={index}>
                <div className="flex justify-between">
                  <input
                    name="awards"
                    type="text"
                    onChange={(e) => handleAwardChange(index, e)}
                    value={exp.name}
                    placeholder="Award"
                    className="p-0 text-lg text-black"
                  />
                </div>
                <button
                  onClick={(index) => handleRemoveAward(index)}
                  className="flex justify-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddAward}>Add</button>
          </div>
        </div>

        {/* Languages */}

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="languages" className="font-semibold">
              Languages
            </label>

            {form.languages.map((exp, index) => (
              <div className="flex flex-col gap-1 " key={index}>
                <div className="flex justify-between">
                  <input
                    name="languages"
                    type="text"
                    onChange={(e) => handleLanguageChange(index, e)}
                    value={exp.name}
                    placeholder="Language"
                    className="p-0 text-lg text-black"
                  />
                </div>
                <button
                  onClick={(index) => handleRemoveLanguage(index)}
                  className="flex justify-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddLanguage}>Add</button>
          </div>
        </div>

        {/* Interests */}

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="interests" className="font-semibold">
              Interests
            </label>

            {form.interests.map((interest, index) => (
              <div className="flex flex-col gap-1 " key={index}>
                <div className="flex justify-between">
                  <input
                    name="interests"
                    type="text"
                    onChange={(e) => handleInterestChange(index, e)}
                    value={interest.name}
                    placeholder="Interest"
                    className="p-0 text-lg text-black"
                  />
                </div>
                <button
                  onClick={(index) => handleRemoveInterest(index)}
                  className="flex justify-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleAddInterest}>Add</button>
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col">
          <label htmlFor="summary" className="font-semibold">
            Summary
          </label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Write a short summary about yourself"
            className="border p-2 rounded h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
