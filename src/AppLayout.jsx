import { Outlet } from "react-router-dom";
import PageNav from "./ui/PageNav";
import Footer from "./ui/Footer";

function AppLayout() {
  return (
    <div className=" grid h-screen grid-rows-[aut0_1fr_1fr]">
      <PageNav />
      <main className=" py-10 mt-20">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default AppLayout;
