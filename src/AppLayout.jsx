import { Outlet } from "react-router-dom";
import PageNav from "./PageNav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      <PageNav />
      <main className="bg-blue-50 py-10 mt-20">
        <Outlet />
      </main>
      <Footer className="bg-amber-300"></Footer>
    </div>
  );
}

export default AppLayout;
