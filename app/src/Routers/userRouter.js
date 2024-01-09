import Home from "../Pages/Home";
//import Profile from "../Pages/Profile";
import Services from "../Pages/Service";
import Prices from "../Pages/Price";
import Doctors from "../Pages/Doctors";
import Appointment from "../Pages/Appointment"
import CardioDep from "../Pages/Departments/Cardio"
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
//import Department from "../Pages/Department";


export const userRoutes = [
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/services",
        Component: Services,
    },
    {
        path: "/prices",
        Component: Prices,
    },
    {
        path: "/doctors",
        Component: Doctors,
    },
    {
        path: "/appointment",
        Component: Appointment,
    },
    {
        path: "/services/cardio",
        Component: CardioDep,
    },
    /*{
        path: "/services/department",
        Component: Department,
    },*/
    {
        path: "/profile",
        Component: AdminPanel,
    },
];