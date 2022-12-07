import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";
import SingleMail from "./Pages/SingelMail/SingelMail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/inbox/:user/:domain",
      element: <Inbox />,
    },
    {
      path: "/mail/:email/:domain/:mailID",
      element: <SingleMail />,
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
