import React from "react";

function Skill({ logo, years }) {
  return (
    <article className="mb-10 flex w-full items-start rounded-lg bg-violet-500 p-3">
      <div className="self-center md:items-start">
        <span className="text-7xl text-blue-400">{logo}</span>
      </div>
      <div className="ml-6">
        <h3 className="text-2xl text-white">Years Experience:</h3>
        <p className="text-xl text-white">{years}</p>
      </div>
    </article>
  );
}

export default Skill;
