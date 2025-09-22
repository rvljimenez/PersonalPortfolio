import { HiEnvelope } from "react-icons/hi2";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <div className="flex flex-col mt-[-100px] justify-center items-center mb-10">
      <p className="font-bold text-4xl uppercase mb-4">send me an email</p>
      <p className="text-2xl uppercase w-1/2 text-center">
        I would love to hear from you. Whether it's a project, job opportunity,
        or just a chat. Feel free to contact me.
      </p>
      <div className="animate-pulse">
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
          <div className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-lg">
            <HiEnvelope />
            <a href="mailto:ronaldjimenezva@gmail.com">Email Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
