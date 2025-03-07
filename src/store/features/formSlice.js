import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  city: "",
  state: "",
  country: "",
  website: "",
  pincode: "",
  phone: "",
  email: "",
  github: "",
  linkedin: "",
  twitter: "",
  experience: [
    {
      name: "",
      title: "",
      duration: "",
      desc: "",
    },
  ],
  projects: [
    {
      name: "",
      title: "",
      duration: "",
      desc: "",
    },
  ],
  skills: [
    {
      skill: "",
    },
  ],
  awards: [
    {
      award: "",
    },
  ],
  languages: [
    {
      language: "",
    },
  ],
  interests: [
    {
      interest: "",
    },
  ],
  summary: "",
  profileImage: "",
  profession: "",
  technicalSkills: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    addExpField: (state, action) => {
      state.experience.push({
        name: "",
        title: "",
        duration: "",
        desc: "",
      });
    },
    removeExpField: (state, action) => {
      if (state.experience.length > 1) {
        state.experience.splice(action.payload, 1);
      }
    },

    updateExpChange: (state, action) => {
      console.log(action.payload);
      const { index, name, value } = action.payload;
      state.experience[index][name] = value;
    },

    addProjectField: (state, action) => {
      state.projects.push({
        name: "",
        title: "",
        duration: "",
        desc: "",
      });
    },

    removeProjectField: (state, action) => {
      state.projects.splice(action.payload, 1);
    },

    updateProjectChange: (state, action) => {
      const { index, name, value } = action.payload;
      state.projects[index][name] = value;
    },

    addSkill: (state, action) => {
      state.skills.push({
        skill: "",
      });
    },

    removeSkill: (state, action) => {
      if (state.skills.length > 1) {
        state.skills.splice(action.payload, 1);
      }
    },

    updateSkill: (state, action) => {
      const { index, value } = action.payload;
      if (state.skills[index]) {
        state.skills[index].skill = value;
      }
    },

    addAward: (state, action) => {
      state.awards.push({
        award: "",
      });
    },

    removeAward: (state, action) => {
      if (state.awards.length > 1) {
        state.awards.splice(action.payload, 1);
      }
    },

    updateAward: (state, action) => {
      const { index, value } = action.payload;
      if (state.awards[index]) {
        state.awards[index].award = value;
      }
    },

    addLanguage: (state, action) => {
      state.languages.push({
        language: "",
      });
    },

    removeLanguage: (state, action) => {
      if (state.languages.length > 1) {
        state.languages.splice(action.payload, 1);
      }
    },

    updateLanguage: (state, action) => {
      const { index, value } = action.payload;
      if (state.languages[index]) {
        state.languages[index].language = value;
      }
    },

    addInterest: (state, action) => {
      state.interests.push({
        interest: "",
      });
    },

    removeInterest: (state, action) => {
      if (state.interests.length > 1) {
        state.interests.splice(action.payload, 1);
      }
    },

    updateInterest: (state, action) => {
      const { index, value } = action.payload;
      if (state.interests[index]) {
        state.interests[index].interest = value;
      }
    },
  },
});

export const {
  updateField,
  addExpField,
  updateExpChange,
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
  updateInterest

} = formSlice.actions;
export default formSlice.reducer;
