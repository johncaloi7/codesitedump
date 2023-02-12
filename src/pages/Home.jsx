import React from "react";
import Programmer from "../assets/programming.svg";
import Skillset from "../components/Skillset";

function Home() {
  return (
    <main>
      <section className="flex h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 p-8 md:flex-row">
        <section className="hidden flex-1 md:flex">
          <img src={Programmer} alt="" />
        </section>
        <section className="mt-20 ml-8 flex h-96 w-full flex-1 p-4 md:mt-0">
          <div className="flex flex-col">
            <p className="w-full text-3xl font-light text-slate-700">
              <span className="text-4xl font-bold text-white">Welcome </span>
              to dump site! Here I post my random opinions about technology that
              I can relate to. To see some of my works, just click the button
              below to visit my Github profile.
            </p>

            <a
              className="mt-12 w-36 rounded-md bg-blue-600 p-4 text-center text-lg font-semibold text-white"
              href="https://github.com/johncaloi7"
              target="_blank"
              rel="noreferrer"
            >
              Visit Github
            </a>
          </div>
        </section>
      </section>

      <Skillset />
    </main>
  );
}

export default Home;
