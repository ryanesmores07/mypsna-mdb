import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  HomeLayout,
  Artist,
  Login,
  Register,
  Rankings,
} from "./pages";
import { Error, ErrorElement } from "./components";

// Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as artistLoader } from "./pages/Artist";
import { loader as rankingsLoader } from "./pages/Rankings";
import { action as registerUser } from "./pages/Register";
import { action as loginUser } from "./pages/Login";
import { store } from "./store";

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
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
        action: loginUser(store),
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <Error />,
        action: registerUser,
      },
      {
        path: "rankings",
        element: <Rankings />,
        errorElement: <Error />,
        loader: rankingsLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
