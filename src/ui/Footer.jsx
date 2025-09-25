import { HiEnvelope } from "react-icons/hi2";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <div className="grid grid-rows-3p-10 items-center mx-50">
      <p className="flex text-4xl font-bold mb-5 items-center justify-center ">
        Send Me An Email
      </p>
      <p className="text-center">
        I’d genuinely love to hear from you—whether you’re reaching out about a
        potential project, a job opportunity, a creative collaboration, or
        simply want to have a meaningful conversation.don’t hesitate to get in
        touch. Your message is always welcome, and I look forward to hearing
        what’s on your mind. Feel free to reach out anytime!`
      </p>

      <div className="flex animate-pulse items-center justify-center mb-9">
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
