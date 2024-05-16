import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, HomeLayout, Artist } from "./pages";
import { Error, ErrorElement } from "./components";

// Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as artistLoader } from "./pages/Artist";

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
      {
        path: "artist",
        children: [
          {
            path: ":artist",
            element: <Artist />,
            loader: artistLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
