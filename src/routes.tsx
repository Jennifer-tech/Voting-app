import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Register from "./screens/register";
  import VerifyIdentity from "./screens/verifyIdentity";
  import Location from "./screens/location";
  import Success from "./screens/success";
  import VerifyIdentity2 from "./screens/verifyIdentity2";
  import PersonalInfo from "./screens/personalInfo";
  import StatusChecker from "./screens/statusChecker";
  import EmailVerification from "./screens/emailVerification";
  import PvcStatus from "./screens/pvcStatus";

  export const Routes = createBrowserRouter([
      {
        path: "/",
        element: <Register />, 
      },
      {
        path: "/verifyIdentity",
        element: <VerifyIdentity />, 
      },
      {
        path: "/verifyIdentity2",
        element: <VerifyIdentity2 />, 
      },
      {
        path: "/location",
        element: <Location />, 
      },
      {
        path: "/success",
        element: <Success />, 
      },
      {
        path: "/personalInfo",
        element: <PersonalInfo />, 
      },
      {
        path: "/statusChecker",
        element: <StatusChecker />, 
      },
      {
        path: "/emailVerification",
        element: <EmailVerification />, 
      },
      {
        path: "/PvcStatus",
        element: <PvcStatus />, 
      },
  ]);