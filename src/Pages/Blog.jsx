import React from "react";

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
  {
    title: "High Performance JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-4.jpg",
    link: "#",
    published: "1 month ago",
  },
  {
    title: "Learn React in 24 Hours",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-5.jpg",
    link: "#",
    published: "1 month ago",
  },
  {
    title: "How to Build Desktop Apps with HTML, CSS and JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-6.jpg",
    link: "#",
    published: "2 months ago",
  },
];

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

      <button className="bg-green-600 hover:bg-green-950 mt-8 mb-20 px-6 py-3 gap-1 flex items-center justify-center mx-auto rounded-md text-lg w-full text-white">
        Next
      </button>
    </div>
  );
};

export default Blog;
