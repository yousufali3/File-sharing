import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Effortless File Sharing
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-gray-300 sm:text-xl/relaxed">
              Seamless, Secure, and Swift. Share your files with ease, and
              experience hassle-free transfers. Whether it's work documents or
              personal memories, we've got you covered.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-pink-500 bg-pink-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/upload"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-indigo-500 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:bg-indigo-400 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
