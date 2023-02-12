import React from "react";
import Skill from "./Skill";
import skills from "../utils/skills";

function Skillset() {
  return (
    <section className="bg-slate-100 p-8">
      <h2 className="mb-16 text-center text-6xl font-bold tracking-tighter text-sky-600 md:mb-20">
        Technologies I Use
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {skills.map((skill) => {
          const { id, years, logo } = skill;

          return <Skill key={id} years={years} logo={logo} />;
        })}
      </section>
    </section>
  );
}

export default Skillset;
