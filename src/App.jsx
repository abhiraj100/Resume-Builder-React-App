import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import ServiceAndPpricing from "./Pages/ServiceAndPricing";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import ProjectPage from "./Pages/ProjectPage";
import BlogPost from "./Pages/BlogPost";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service-pricing" element={<ServiceAndPpricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project-page" element={<ProjectPage />} />
          <Route path="/blog-post" element={<BlogPost />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
