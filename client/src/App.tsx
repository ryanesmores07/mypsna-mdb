import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, HomeLayout } from "./pages";
import { Error, ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
