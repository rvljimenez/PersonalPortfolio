import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Resume";
import AppLayout from "./AppLayout";
0;

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
