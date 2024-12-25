import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddTotorials from "../pages/AddTotorials";
import MyTutorials from "../pages/MyTutorials";
import UpdateMyTutorials from "../pages/UpdateMyTutorials";
import FindTutors from "../pages/FindTutors";
import TutorDetails from "../pages/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookedTutor from "../pages/MyBookedTutor";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTutorials',
                element: <PrivateRoute><AddTotorials></AddTotorials></PrivateRoute>
            },
            {
                path: '/myTutorials',
                element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
            },
            {
                path: '/updateMyTutorial/:id',
                element: <UpdateMyTutorials></UpdateMyTutorials>
            },
            {
                path: '/find-tutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: '/tutor/:details',
                element: <PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>
            },
            {
                path: '/myBooked-tutor',
                element: <PrivateRoute><MyBookedTutor></MyBookedTutor></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;