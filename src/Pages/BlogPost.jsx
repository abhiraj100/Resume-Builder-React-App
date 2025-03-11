import React from "react";

const BlogPost = () => {
  return (
    <div>
      <div className="max-w-full px-20 mx-auto p-6 bg-white rounded-lg shadow">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">
          Why Every Developer Should Have A Blog
        </h1>

        {/* Meta Info */}
        <p className="text-gray-500 text-sm">
          Published 2 days ago • 5 min read • 4 comments
        </p>

        <div className="relative mt-4">
          <img
            src="https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Developer blogging"
            className="w-full h-[400px] rounded-lg"
          />
          <div className="absolute bottom-4 left-4  top-20 w-[350px] bg-opacity-60 text-white p-4 rounded-lg">
            <p className="text-3xl font-semibold">
              "IF YOU CAN WRITE 'HELLO WORLD' YOU CAN CHANGE THE WORLD"
            </p>
            <p className="text-md mt-3">- Raghu Venkatesh</p>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-2 ">
          Image Credit:{" "}
          <a href="#" className=" underline">
            maddev.com
          </a>{" "}
          <span className="underline">(Premium Programming T-shirts)</span>
        </p>

        {/* Content */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
        </p>

        {/* Code Block Example */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Code Block Example</h2>
          <p className="text-gray-700">
            You can get more info at{" "}
            <a
              href="https://highlightjs.org/"
              className="text-green-700 font-medium"
            >
              https://highlightjs.org/
            </a>
            . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim.
          </p>
        </div>

        <div className="w-full h-[350px] bg-gray-950 mt-4">
            <pre>

            </pre>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
