import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import LogIn from "./screens/logIn";
import Auth from "./screens/auth";
import BbNaija from "./screens/bbNaija";
import Verification from "./screens/verification";
import ConfirmCandidate from "./screens/confirmCandidate";
import VerifyIdentity from "./screens/verifyIdentity";
import SelectVote from "./screens/selectVote";
import Success from "./screens/success";





export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />
  },
  {
    path: "/verifyIdentity",
    element: <VerifyIdentity />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
  path: '/auth',
  element: <Auth />
  },
  {
    path: "/selectVote",
    element: <SelectVote />,
  },
  {
    path: "/bbNaija",
    element: <BbNaija />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/confirmCandidate",
    element: <ConfirmCandidate />,
  },
  
  {
    path: "/success",
    element: <Success />,
  },
]);
