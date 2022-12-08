import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/inbox/:email",
      element: <Inbox />,
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
