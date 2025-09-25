import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiJquery, SiReactquery, SiReactrouter, SiRedux } from "react-icons/si";

function Skills() {
  return (
    <div className="grid grid-cols-3 text-base">
      <div className="flex gap-2 items-center">
        <FaReact />
        <p>React</p>
      </div>
      <div className="flex gap-2 items-center">
        <RiNextjsFill />
        <p>Nextjs</p>
      </div>
      <div className="flex gap-2 items-center">
        <RiTailwindCssFill />
        <p>TailwindCss</p>
      </div>
      <div className="flex gap-2 items-center">
        <FaHtml5 />
        <p>HTML5</p>
      </div>
      <div className="flex gap-2 items-center">
        <FaBootstrap />
        <p>Bootstrap</p>
      </div>
      <div className="flex gap-2 items-center">
        <SiReactquery />
        <p>ReactQuery</p>
      </div>
      <div className="flex gap-2 items-center">
        <FaCss3 />
        <p>CSS3</p>
      </div>
      <div className="flex gap-2 items-center">
        <FaNodeJs />
        <p>NodeJs</p>
      </div>
      <div className="flex gap-2 items-center">
        <SiReactrouter />
        <p>React Router</p>
      </div>
      <div className="flex gap-2 items-center">
        <RiSupabaseFill />
        <p>Supabase</p>
      </div>
      <div className="flex gap-2 items-center">
        <SiJquery />
        <p>JQuery</p>
      </div>
      <div className="flex gap-2 items-center">
        <SiRedux />
        <p>Redux</p>
      </div>
    </div>
  );
}

export default Skills;
