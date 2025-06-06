import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ClassicRoomDetails from "./components/ClassicRoomDetails";
import DeluxeRoomDetails from "./components/DeluxeRoomDetails";
import SuiteRoomDetails from "./components/SuiteRoomDetails";
import ReservePage from "./components/ReservePage";
import BookingPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";

function RoomDetails() {
  const { roomType } = useParams();

  if (roomType === "classic") {
    return <ClassicRoomDetails />;
  } else if (roomType === "deluxe") {
    return <DeluxeRoomDetails />;
  } else if (roomType === "suite") {
    return <SuiteRoomDetails />;
  }

  return <Navigate to="/rooms" />;
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
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
    path: "/rooms/:roomType/:roomName",
    element: <ReservePage />,
  },
  {
    path: "/rooms/:roomType/:roomName/booking",
    element: <BookingPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
