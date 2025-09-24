import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { HiEnvelope } from "react-icons/hi2";

function Home() {
  return (
    <div className="h-148 grid px-50 py-5 ">
      <div>
        <div className="font-bold block text-6xl ">
          Hello, I am
          <div className="text-8xl py-5">
            Ronald Vincent Front-End Developer.
          </div>
        </div>
        <div className="text-3xl">
          "Solving design challenges through innovative digital concepts,
          intuitive interfaces, and engaging interactions. Expert in crafting
          seamless web applications and immersive online experiences."
        </div>

        <div className="flex mt-6 gap-4 text-lg">
          <div className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-lg">
            <IoLogoGithub />
            <a
              className="hover: cursor-pointer"
              href="https://github.com/rvljimenez"
            >
              Github
            </a>
          </div>
          <div className=" flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-lg">
            <IoLogoLinkedin />
            <a
              className="hover: cursor-pointer"
              href="https://www.linkedin.com/in/ronald-vincent-jimenez-95a75b209/"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 text-lg italic font-bold">
          <HiEnvelope />
          <a href="mailto:ronaldjimenezva@gmail.com">Send me an Email</a>
        </div>
      </div>

      <div>
        <div>
          <img />
        </div>
      </div>
    </div>
  );
}

export default Home;
