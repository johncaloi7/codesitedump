import React from "react";
import Me from "../assets/me.jpg";

function About() {
  return (
    <section>
      {/* upper part about page */}
      <section className="grid grid-cols-1 bg-gradient-to-tl from-sky-600 p-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-72 justify-self-center">
          <img
            className="opacity-85 rounded-lg shadow-lg grayscale"
            src={Me}
            alt="selfie"
          />
        </div>
        <div className="w-86 mt-10 justify-self-center rounded from-slate-800 to-slate-400 p-8 text-white md:mt-0 md:justify-self-start md:bg-gradient-to-br lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tighter">
            About the author
          </h1>
          <p className="mt-3 text-lg">
            John is a simple lad who happens to know quite a lot about
            technology and he strongly preaches{" "}
            <strong>
              "Never ever memorize codes unless you want to go mad."
            </strong>{" "}
            His first computer experience (IBM PC Series) dates way back in 1998
            and he only loves playing games back then. Surrounded by tech expert
            relatives during his childhood, he managed to pickup Python in 2008
            and utilized it to finish some of his homeworks during highschool.
            In his college years, he took an unrelated program to technology due
            to parents' decision but it didn't stop him to learn more about
            technology so he took extra units in engineering and technology. In
            time, he learned web development, Cisco Networking and cybersecurity
            as well. He holds an MCSA 2016 title and Civil Service
            Commission-Profesional certification. Aside from technological
            aspect, he enjoys long walks and spends some of his time in archery.
            And sometimes he misses his old erased Github account.
          </p>
        </div>
      </section>

      {/* technical exeperience */}
      <section className="bg-slate-100 p-8">
        <h1 className="mb-10 text-4xl font-semibold text-slate-900 underline decoration-sky-400 decoration-2 underline-offset-8 md:text-5xl">
          Technical Experience
        </h1>
        <ul className="text-slate-800">
          <li className="mb-5">
            <div className="mb-2">
              <h2 className="text-2xl">Developer at Paul Albert PC Shop</h2>
              <h3 className="font-medium">2016 - 2018</h3>
            </div>
            <p className="max-w-2xl">
              Used Python to accomplish different tasks such as watermarking,
              file conversion, data analysis etc. of countless files and
              delivered highly satisfying work results which customers loved.
              Provided hardware and software troubleshooting to less tech savvy
              customers and gave them easier to understand instructions which is
              highly appreciated compared to traditional and confusing manuals.
            </p>
          </li>
          <li className="mb-5">
            <div className="mb-2">
              <h2 className="text-2xl">
                Freelance Developer and Ethical Hacker
              </h2>
              <h3 className="font-medium">2019 - Present</h3>
            </div>
            <p className="max-w-2xl">
              Has created a website using Django(will migrate to React) for a
              maternity clinic which has improved their business' credibility
              and built different React applications along with NodeJS APIs.
              <br />
              <br />
              Provided security services to numerous individuals/professionals
              and familiarized them to different hacking techniques that
              blackhat hackers use to steal sensitive information. Managed to
              help clients with vulnerable versions of Windows 10 to secure or
              upgrade their machine especially during 2020 lockdown when
              cybercriminals took advantage of remote work nature. Detected and
              found SMBGhost, EternalBlue, DoublePulsar and Bluekeep
              vulnerabilities on different machines and has given
              recommendations for upgrades to avoid potential damages.
              Successfully social engineered one of the client and extracted
              bank details; disclosed it afterwards and discussed the dangers of
              social engineering and how most cyber attacks don't require
              complex tools or software. Overall, clients have gained enough
              knowledge how to protect themselves online and improved their
              digital presence.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default About;
