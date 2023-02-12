import React from "react";

function Footer() {
  return (
    <footer className="flex h-full flex-col flex-wrap justify-center bg-gradient-to-l from-cyan-500 to-blue-500 p-8 md:flex-row md:justify-around">
      <section className="ml-6 flex-1">
        <h1 className="mb-2 text-3xl font-semibold text-white">
          Want to work with me?
        </h1>
        <div className="text-white">
          <h2 className="text-xl">Email:</h2>
          <p className="text-lg">pinlacjohncarlo1@gmail.com</p>
        </div>
        <div className="text-white">
          <h2 className="text-xl">Contact:</h2>
          <p className="text-lg">+639777281506</p>
        </div>
      </section>
      <section className="mt-16 flex w-full flex-1 justify-center md:mt-0 md:items-end md:justify-end">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-lg font-semibold">
            CodeSite Dump. All rights reserved.
          </h2>
          <p className="text-md font-medium">
            &copy;{new Date().getFullYear()}
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
