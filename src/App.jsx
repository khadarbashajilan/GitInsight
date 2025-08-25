import Landingpage from "./components/Landingpage";
import Dashboard from "./components/Dashboard";
import Repositories from "./components/Repositories";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import GitProvider from "./context/GitContext";

const routes = [
  {
    path: "/",
    element: <Landingpage></Landingpage>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/repos",
    element: <Repositories></Repositories>,
  },
];

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <GitProvider>
        <RouterProvider router={router} />
      </GitProvider>
    </>
  );
}

export default App;
