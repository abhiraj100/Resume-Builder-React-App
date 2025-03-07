import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-slate-100 flex flex-col gap-3 items-center py-6">
        <h1 className="text-3xl font-bold">
          A Blog About Software Development And Life
        </h1>
        <p className="">
          Welcome to my blog. Subscribe and get my latest blog post in your
          inbox.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-400 rounded-md px-2 w-96"
            placeholder="Enter your mail"
          />
          <button className="flex gap-1 hover:bg-green-950 bg-green-400 px-4 py-2 rounded-md font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
