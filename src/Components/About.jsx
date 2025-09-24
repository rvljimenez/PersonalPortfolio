import PageNav from "../ui/PageNav";
import Skills from "../data/Skills";
import image from "../data/image.jpg";

function About() {
  return (
    <div className="h-screen px-50">
      <div className="font-bold text-6xl mb-12">About Me</div>
      <div className="grid grid-cols-3 align-middle">
        <div className="flex flex-col gap-10 justify-evenly text-lg mb-12 col-span-2 mr-30">
          <p>
            Hello! My name is Ronald Jimenez, and I am a front-end developer
            with almost 2 years of experience.
          </p>

          <p>
            I have a passion for building user-interfaces for web-based
            applications and have been honing my skills through personal
            projects in my free time. Specifically, I've been using React and
            its ecosystem to create innovative and engaging interfaces.
          </p>
        </div>
        <div>
          <img src={image} className="h-50 rounded-[50%] w-auto" />
        </div>
      </div>

      <div className="text-lg mb-20 col-span-2">
        <p className="font-semibold mb-6">
          Here are the technologies I've been working with:
        </p>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
