import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import RoomDetails from "./components/ClassicRoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/rooms/:roomType", 
    element: <RoomDetails />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
