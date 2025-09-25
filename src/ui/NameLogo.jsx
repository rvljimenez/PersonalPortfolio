import { NavLink } from "react-router-dom";

function NameLogo() {
  return (
    <div className="hover:font-bold duration-150">
      <NavLink to={"/"} className="hidden md:block">
        Ronald Vincent Jimenez
      </NavLink>
    </div>
  );
}
export default NameLogo;
