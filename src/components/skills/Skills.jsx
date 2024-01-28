import React from "react";

const calculateGradientColor = (percentage) => {
  const blue = 100 - percentage;
  const green = percentage;
  return `linear-gradient(to right, #3498db ${blue}%, #2ecc71 ${green}%)`;
};

const SkillBar = ({ skill, percentage }) => {
  const gradientColor = calculateGradientColor(percentage);

  return (
    <div className="bars lg:mb-4 mb-2 lg:p-0">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold hover:text-[#c42d4b] cursor-pointer">
          {skill}
        </span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="relative w-full lg:h-2 h-1 bg-gray-200 rounded-full overflow-hidden transition-all duration-1000 ease-in-out">
        <div
          className="absolute h-2 rounded-full"
          style={{
            background: gradientColor,
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
const Skills = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-gray-200 to-gray-300 text-gray-900 mt-0">
      <div className="max-w-[1280px] mx-auto lg:pl-16 lg:pr-16">
        <div>
          <p className="lg:text-4xl text-3xl text-gray-800 text-center mt-2 lg:font-extrabold font-bold border-b-8 border-gray-700  ">
            Skills
          </p>
          <p className="lg:py-6 py-1  lg:text-3xl text-[16px] text-center text-gray-500 font-semibold">
            {" "}
            I have high skills in developing and programming
          </p>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
            <div className="text mb-4 font-sangharia lg:text-2xl text-[16px] ml-10 font-bold text-green-500">
              My creative skills & Experiences
            </div>
            <ul className="list-none p-0 lg:text-xl text-sm ml-10 lg:font-semibold text-gray-600">
              <li className="mb-2">
                <span className="font-bold">Languages:</span> .Net, Python, C++,
                JavaScript
              </li>
              <li className="mb-2">
                <span className="font-bold">Development:</span> Agile, OOP, Git
              </li>
              <li className="mb-2">
                <span className="font-bold">Web:</span>JavaScript, React.Js,
                Node.js,Next Js, TypeScript, Bootstrap, Tailwind, Asp .Net
              </li>
              <li className="mb-2">
                <span className="font-bold">Databases:</span> SQL, MongoDB,
                Oracle,PostgreSQL
              </li>
              <li className="mb-2">
                <span className="font-bold">Problem Solving:</span> Algorithms,
                Data Structures
              </li>
              <li className="mb-2">
                <span className="font-bold">Tools:</span> Eclipse, VS Code,
                Jupyter
              </li>
              <li className="mb-2">
                <span className="font-bold">Soft Skills:</span> Teamwork,
                Communication, Problem Solving
              </li>
            </ul>
            {/* <a href="readmore.html" className="text-blue-500">Read more</a> */}
            <div class="button-with-shadows">
              <button class="border lg:w-48 w-28 h-8 lg:h-12 lg:mt-5 mt-1 bg-gray-800 text-white rounded-md lg:text-xl text-lg ml-10 hover:bg-transparent hover:text-black shadow-red-and-blue hover:text-xl hover:font-extrabold">
                Read more
              </button>
            </div>
          </div>


          <div className="w-full md:w-1/2 lg:w-1/2 lg:p-0 p-4">
            <SkillBar skill="Next Js" percentage={80} />
            <SkillBar skill="React Js" percentage={90} />
            <SkillBar skill="Nest Js" percentage={75} />
            <SkillBar skill="ASP.Net" percentage={80} />
            <SkillBar skill="C#" percentage={90} />
            <SkillBar skill="JavaScript" percentage={85} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
